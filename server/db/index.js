require("dotenv").config();

const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI; 

const client = new MongoClient(uri);

const dbconnect = () => {
  const clientSingleton = {
    client: undefined,
    getClient: async () => {
      if (!this.client) {
        this.client = await client.connect();
      }
      return this.client;
    }
  }

  return async () => {
    return await (await clientSingleton.getClient())
      .db(process.env.DB_NAME);
  }
}

module.exports = { conn: dbconnect() };
