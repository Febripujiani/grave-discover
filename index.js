const { PORT } = require('./src/config');
const { server } = require('./src/apps/express');
const { DatabaseConnect } = require('./src/apps/knex');

DatabaseConnect(() => {
  server.listen(PORT, () => {
    console.log(`✈️  Server listening on http://localhost:${PORT}`);
  });
});
