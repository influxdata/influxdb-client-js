// see `yarn run env` vs `npm run env`
if (!/yarn\//.test(process.env.npm_config_user_agent)) {
  throw new Error(
    `Use yarn in place of '${process.env.npm_config_user_agent}' !`
  )
}
