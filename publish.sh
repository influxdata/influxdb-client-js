yarn install --frozen-lockfile && \
yarn run build && \
yarn run test && \
lerna publish && \
LERNA_JSON=$(cat lerna.json) && \
LERNA_VERSION="$(node -pe "JSON.parse(\`$LERNA_JSON\`)['version']")" && \
sed -i '' -e "s/CLIENT_LIB_VERSION = '.*'/CLIENT_LIB_VERSION = '$LERNA_VERSION'/" packages/core/src/impl/version.ts && \
echo "Publish successful"
echo ""
echo "Next steps:"
echo " - add new version to CHANGELOG.md"
echo " - push changes to repository by : \"git commit -am 'prepare to next development iteration' && git push\""
echo ""