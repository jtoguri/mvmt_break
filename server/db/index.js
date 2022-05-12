require("dotenv").config();

const { MongoClient, ObjectId } = require('mongodb');

const username = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASS);
const uri =
  `mongodb://${username}:${password}@${process.env.DB_HOST}:` + 
  `${process.env.DB_PORT}/${process.env.DB_NAME}`;

const client = new MongoClient(uri);

const dbconnect = async () => {
  await client.connect();

  return async () => {
    return await client.db(process.env.DB_NAME);
  }
}

module.exports = { conn: dbconnect() };
