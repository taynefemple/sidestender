'use strict';

const { db } = require('./server/db/models')
const app = require('./server')
const PORT = process.env.PORT || 1337;

db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`WHO DAT? (on port ${PORT})`))
  })
  .catch(console.error);
