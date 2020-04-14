.DEFAULT_GOAL := help

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo ""
	@echo "  publish    to publish packages to specified version by VERSION property. make publish VERSION=1.1.0"
	@echo "  nightly    to publish nightly build"
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
	@echo " - add new version to CHANGELOG.md"
	@echo " - push changes to repository by : \"git commit -am 'chore(release): prepare to next development iteration [skip CI]' && git push\""
	@echo ""

nightly:
	yarn install --frozen-lockfile
	$(eval VERSION=$(shell cat packages/core/src/impl/version.ts | sed 's/[^0-9.]*//g' | awk -F. '{$$2+=1; OFS="."; print $0}'))
	sed -i '' -e "s/CLIENT_LIB_VERSION = '.*'/CLIENT_LIB_VERSION = '$(VERSION).nightly'/" packages/core/src/impl/version.ts
	git commit -am "chore(release): prepare to release influxdb-client-js-$(VERSION).nightly"
	yarn run build
	yarn lerna publish --canary preminor --no-git-tag-version --force-publish --preid nightly --yes
