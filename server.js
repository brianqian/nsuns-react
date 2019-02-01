const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const bcyrpt = require('bcrypt');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

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

app.post('/auth/login', (req, res) => {
  connection.query(`SELECT * FROM userInfo WHERE id = ${req.query.user}`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});

app.get('/api/getMain', (req, res) => {
  console.log('gettingMain, userid:', req.query.user);
  connection.query(`SELECT * FROM userInfo WHERE id = ${req.query.user}`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});

app.post('/api/create', async (req, res) => {
  console.log('creating new user...');
  console.log(req.body);
  connection.query(`SELECT username FROM userInfo WHERE username= 'brian'`, (err, data) => {
    if (err) throw err;
    if (data.length) {
      res.json('username taken');
    } else {
      connection.query(
        `INSERT INTO userInfo (username, password) 
        VALUES ('${req.body.username}','${req.body.password}')`,
        (err, data) => {
          if (err) console.error(err);
          res.json(data.insertId);
        }
      );
    }
  });
});

app.post('/api/saveMain', (req, res) => {
  console.log('SAVING MAIN');
  const data = req.body;
  console.log(data);
  connection.query(
    `UPDATE userInfo SET squatTM = ${data.squatTM},
    benchTM = ${data.benchTM},
    ohpTM = ${data.ohpTM},
    deadliftTM = ${data.deadliftTM}
    WHERE id = ${data.userId}`
  );
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} else {
  app.use(express.static(__dirname + 'client/public'));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/public/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
