'use strict';

const db = require('./server/db/dbProper')
const app = require('./app')
const PORT = process.env.PORT || 1337;


db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`WHO DAT? (on port ${PORT})`))
  })
  .catch(console.error);

module.exports = 'server'
