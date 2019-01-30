const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3001;
const mysql = require('mysql');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'nsuns_db',
});

connection.connect(err => {
  if (err) throw err;
});

app.get('/api', (req, res) => {
  console.log(req.query.user);
  connection.query(`SELECT * FROM workouts WHERE id = ${req.query.user}`, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.get('/api/create', (req, res) => {
  connection.query(
    'INSERT INTO workouts (squatRM, benchRM, deadliftRM, ohpRM) VALUES (100, 100 ,100, 100)',
    (err, data) => {
      if (err) throw err;
      res.json(data.insertId);
    }
  );
});

app.post('/api/save', (req, res) => {
  console.log(req.query.user);
  console.log(req.body);
  const data = req.body;
  connection.query(`UPDATE workouts 
  SET squatRM = ${data.squatRM},
  benchRM = ${data.benchRM},
  ohpRM = ${data.ohpRM},
  deadliftRM = ${data.deadliftRM}
  WHERE id = ${req.query.user}`);
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
