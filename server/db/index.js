require("dotenv").config();

const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');

const username = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASS);
const uri = `mongodb+srv://${username}:${password}@mvmtbreak.kyxeq.mongodb.net/?retryWrites=true&w=majority`
  
  /*`mongodb://${username}:${password}@${process.env.DB_HOST}:` + 
  `${process.env.DB_PORT}/${process.env.DB_NAME}`;*/

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
