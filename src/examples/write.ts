import Client from '../index'

const token = process.env.INFLUXDB_TOKEN
const client = new Client('http://127.0.0.1:9999/api/v2', token)

const data = ''
const bucket = 'bucket'
const orgID = 'orgID'

client.write.create(orgID, bucket, data)
