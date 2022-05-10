require("dotenv").config();

const fs = require("fs");

const { MongoClient } = require('mongodb');

const username = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASS)
const uri =
`mongodb://${username}:${password}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the server
    console.log("\u001b[93mConnecting...\u001b[0m");
    await client.connect();
    console.log("\u001b[92mSuccessfully connected to server!\u001b[0m");

    const db = client.db(process.env.DB_NAME);
    
    console.log("\u001b[91mDropping all collections from: " + 
      `\u001b[96m${process.env.DB_NAME}\u001b[0m`);

    await clearCollections(db);

    const newCollections = await db.collections();
    if (newCollections.length === 0) {
      console.log("\u001b[92mDatabase is empty.\u001b[0m");
    }

    console.log("Adding the collections...");
    addCollections(db);

  } finally {
    await client.close();
  }
}

const clearCollections = async function(db) {
  const collections = await db.collections();
  for (const collection of collections) {
    await collection.drop();
  }
  return;
}

const addCollections = async function(db) {
  const seeds = fs.readdirSync("./db/collections");
  for (const fn of seeds) {
    console.log(fn.slice(0, -5));
  }
}

main();
