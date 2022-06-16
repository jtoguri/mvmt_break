const { conn } = require('./index.js');

const interactions = () => {

  let db = undefined; 
  
  const getdb = async () => {
    if (!db) {
      db = await conn();
    }
    return db;
  }

  //const exercises = await db.collection('exercises');

  return async () => {
    const db = await getdb();

    return {
      getRandomExercise: async () => {
        const exercises = await db.collection('exercises');

        const randomExercise = 
          await exercises.aggregate([{$sample: {size: 1}}]).toArray();

        return randomExercise[0];
      },
  
      // Note: below function needs to be modified as data size grows, need
      // to set a lmit (see mognodb node driver docs: batchSize,
      // asyncIterator) it is returning an abstract cursor
      getAllExercises: async () => {
        const allExercises = await exercises.find().toArray();
        return allExercises;
      },

      getUser: async (username) => {
        const user = await db.collection('users').findOne({
          username,
        });

        return user;
      },

      updateHistory: async (history) => {
        const newEntry = await 
          db.collection('history').insertOne(history);
        
        return newEntry;
      }

    };
  };
};

module.exports = { createInteraction: interactions() };
