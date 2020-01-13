yarn install --frozen-lockfile && \
yarn run test && \
yarn run build && \
lerna publish && \
git push --follow-tags && \
echo "Publish successful"