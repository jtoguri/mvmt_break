const { createInteraction } = require('../db/db_interactions');

module.exports = async (id) => {
  const { getHistory } = await createInteraction();

   const history = await getHistory(id);

   return history;
}
