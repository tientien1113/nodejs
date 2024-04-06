var mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejs1",
});
module.exports = pool;
