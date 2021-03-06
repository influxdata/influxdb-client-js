#!/usr/bin/env node
/*
This example shows how to use `username + password` authentication 
against InfluxDB v2 OSS in order to get/create authorization tokens.

All other examples use token authentication, which is preferred 
for programmatic access to InfluxDB v2. `username + password` 
authentication might be used to automate management of tokens.
*/

const {InfluxDB} = require('@influxdata/influxdb-client')
const {
  AuthorizationsAPI,
  OrgsAPI,
  SigninAPI,
  SignoutAPI,
} = require('@influxdata/influxdb-client-apis')
const {url, username, password, org} = require('./env')

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
  let hasMyToken = false
  ;(authorizations.authorizations || []).forEach(auth => {
    console.log(auth.token)
    console.log(' ', auth.description)
    hasMyToken = hasMyToken || auth.description === 'example token'
  })
  if (!hasMyToken) {
    console.log('*** GetOrganization ***')
    const orgsResponse = await new OrgsAPI(influxDB).getOrgs({org}, session)
    if (!orgsResponse.orgs || orgsResponse.orgs.length === 0) {
      throw new Error(`No organization named ${org} found!`)
    }
    const orgID = orgsResponse.orgs[0].id
    console.log(' ', org, orgID)
    console.log('*** CreateAuthorization ***')
    const auth = await authorizationAPI.postAuthorizations(
      {
        body: {
          description: 'example token',
          orgID,
          permissions: [
            {
              action: 'read',
              resource: {type: 'buckets', orgID},
            },
            {
              action: 'write',
              resource: {type: 'buckets', orgID},
            },
          ],
        },
      },
      session
    )
    console.log(auth.token)
    console.log(' ', auth.description)
  }
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
