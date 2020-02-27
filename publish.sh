yarn install --frozen-lockfile && \
yarn run build && \
yarn run test && \
lerna publish && \
echo "Publish successful"