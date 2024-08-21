
const { MongoClient, ServerApiVersion } = require('mongodb');
const msgSchema = require("./schemas/messagesSchema.js");
const config = require("./config.json");
const uri = config.mongodb_server;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

async function verifyDatabases() {
  const databasesList = await client.db().admin().listDatabases();
  console.log(databasesList);
}

run();
verifyDatabases();
