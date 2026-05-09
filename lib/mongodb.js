import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'kva_logistic'

if (!uri) {
  throw new Error('MONGODB_URI is not set')
}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export async function getDb() {
  const connectedClient = await clientPromise
  return connectedClient.db(dbName)
}

export async function getCollections() {
  const db = await getDb()
  return {
    users: db.collection('users'),
    addresses: db.collection('addresses'),
    orders: db.collection('orders'),
    supportMessages: db.collection('support_messages')
  }
}
