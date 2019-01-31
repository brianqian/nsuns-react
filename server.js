const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get('/api/getMain', (req, res) => {
  console.log('gettingMain, userid:', req.query.user);
  connection.query(`SELECT * FROM userInfo WHERE id = ${req.query.user}`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});

app.get('/api/create', (req, res) => {
  connection.query(
    'INSERT INTO userInfo (squatRM, benchRM, deadliftRM, ohpRM) VALUES (100, 100 ,100, 100)',
    (err, data) => {
      if (err) throw err;
      res.json(data.insertId);
    }
  );
});

app.post('/api/saveMain', (req, res) => {
  console.log('inside post', req.body);
  const data = req.body;
  connection.query(`UPDATE userInfo
    SET squatRM = ${data.squatMax},
    benchRM = ${data.benchMax},
    ohpRM = ${data.ohpMax},
    deadliftRM = ${data.deadliftMax}
    WHERE id = ${data.userId}`);
});

if (process.env.NODE_ENV === 'production') {
  console.log('Production build...');
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
