const knexfile = require("../../knexfile");
/**
 * @type {import("knex").Knex}
 */
const Database = require("knex")(knexfile);

const DatabaseConnect = async (cb = false) => {
  Database.raw("SELECT 1")
    .then(() => {
      console.log("✈️  Database connected");
      if (cb) cb();
    })
    .catch((e) => {
      console.log("❌ Database not connected");
      console.error(e);
      process.exit(1);
    });
};

module.exports = { DatabaseConnect, Database };
