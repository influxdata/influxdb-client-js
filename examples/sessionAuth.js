#!/usr/bin/env node
/*
This example shows how to use `username + password` authentication 
against InfluxDB v2 OSS. This type of authentication shall be avoided 
in favor of a token authentication, which is preferred for programmatic 
access to InfluxDB v2, tokens can be easily managed in InfluxDB UI.
`username + password` authentication might be required for creating
a first token.
*/

const {InfluxDB} = require('@influxdata/influxdb-client')
const {
  AuthorizationsAPI,
  SigninAPI,
  SignoutAPI,
} = require('@influxdata/influxdb-client-apis')
const {url, username, password} = require('./env')

async function signInDemo() {
  const influxDB = new InfluxDB({url})
  // sign in using user name and password, remember session cookie(s)
  console.log('*** Signin ***')
  const signinApi = new SigninAPI(influxDB)
  const cookies = []
  await signinApi.postSignin(
    {auth: {user: username, password}},
    {
      responseStarted: (headers, status) => {
        if (status < 300) {
          const setCookie = headers['set-cookie']
          if (typeof setCookie === 'string') {
            cookies.push(setCookie.split(';').shift())
          } else if (Array.isArray(setCookie)) {
            setCookie.forEach(c => cookies.push(c.split(';').shift()))
          }
        }
      },
    }
  )
  // authorize communication with session cookies
  const session = {headers: {cookie: cookies.join('; ')}}
  // get all authorization tokens
  console.log('*** GetAuthorizations ***')
  const authorizationAPI = new AuthorizationsAPI(influxDB)
  const authorizations = await authorizationAPI.getAuthorizations({}, session)
  // console.log(JSON.stringify(authorizations?.authorizations, null, 2))
  ;(authorizations.authorizations || []).forEach(auth => {
    console.log(auth.token)
    console.log(' ', auth.description)
  })
  console.log('\nFinished SUCCESS')
  // invalidate the session
  const signoutAPI = new SignoutAPI(influxDB)
  await signoutAPI.postSignout(undefined, session)
  console.log('Signout SUCCESS')
}

signInDemo().catch(error => {
  console.error(error)
  console.log('\nFinished ERROR')
})
