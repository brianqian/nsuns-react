const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
// const mysql = require('mysql');
// const cookieParser = require('cookie-parser');
// const bcyrpt = require('bcrypt');
const routes = require('./backend/routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
