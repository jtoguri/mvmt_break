require("dotenv").config();
const exercises = require('./db/collections/exercises.json');
const users = require("./db/collections/users.json");

const { v1: uuidv1 } = require('uuid');

const fs = require("fs");

const { MongoClient, ObjectId} = require('mongodb');

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
    await addExercises(db);
    await addUsers(db);
    await addHistory(db);

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

const addExercises = async function(db) {
  console.log("Adding the exercises collection");
  const collection = await db.createCollection("exercises");

  return await collection.insertMany(exercises);
}

const addUsers = async function(db) {
  console.log("Adding the users collection");
  const collection = await db.createCollection("users");
  
  return await collection.insertMany(users);
}

const addHistory = async function(db) {
  console.log("Adding the history collection");
  const collection = await db.createCollection("history");
}

main();
