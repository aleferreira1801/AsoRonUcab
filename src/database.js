const pg = require('pg');
const client = new pg.Client({
  host: "localhost",
  port: 5432,
  database: "AsoRonUcab",
  user: "postgres",
  password: "1234",
});

module.exports = client;