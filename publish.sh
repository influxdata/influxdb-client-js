yarn install --frozen-lockfile && \
yarn run test && \
yarn run build && \
lerna publish && \
echo "Publish successful"