const mysql = require('mysql');

const connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'nsuns_db',
  }
);

connection.connect(err => {
  if (err) throw err;
});

module.exports = connection;
