# **Releasing a new version**
# Ensure that:
# - You have administrator access to this repo on GitHub
# - You have permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
# - You are on `master` and the working tree is clean
# Then run the publish target with VERSION specified:
# ```
# make publish VERSION=1.8.0
# ```
.DEFAULT_GOAL := help

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo ""
	@echo "  publish    to publish packages to specified version by VERSION property. make publish VERSION=1.1.0"
	@echo ""

publish:
	$(if $(VERSION),,$(error VERSION is not defined. Pass via "make publish VERSION=1.1.0"))
	git checkout master
	git pull
	yarn install --frozen-lockfile
	sed -i '' -e "s/CLIENT_LIB_VERSION = '.*'/CLIENT_LIB_VERSION = '$(VERSION)'/" packages/core/src/impl/version.ts
	yarn run build
	yarn run test
	@echo "Publishing $(VERSION)..."
	git commit -am "chore(release): prepare to release influxdb-client-js-$(VERSION)"
	lerna publish $(VERSION)
	@echo "Publish successful"
	@echo ""
	@echo "Next steps:"
	@echo " - publish updated API documentation by: \"yarn apidoc && yarn apidoc:gh-pages\""
	@echo " - add new version to CHANGELOG.md"
	@echo " - push changes to repository by : \"git commit -am 'chore(release): prepare to next development iteration [skip CI]' && git push\""
	@echo ""
