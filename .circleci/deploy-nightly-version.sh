set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" || exit ; pwd -P )"

# Update Version
VERSION=$(cat packages/core/src/impl/version.ts | sed 's/[^0-9.]*//g' | awk -F. '{$2+=1; OFS="."; print $1"."$2"."$3}')
sed -i -e "s/CLIENT_LIB_VERSION = '.*'/CLIENT_LIB_VERSION = '${VERSION}.nightly'/" packages/core/src/impl/version.ts
git config user.name "CircleCI Builder"
git config user.email "noreply@influxdata.com"
git commit -am "chore(release): prepare to release influxdb-client-js-${VERSION}.nightly"

# Build Core
cd "${SCRIPT_PATH}"/..
yarn build

# Publish
yarn lerna publish --canary preminor --no-git-tag-version --force-publish --preid nightly --yes