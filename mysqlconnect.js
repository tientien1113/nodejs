var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs1",
});

db.connect(() => {
  console.log("Đã kết nối database");
});
module.exports = db;
