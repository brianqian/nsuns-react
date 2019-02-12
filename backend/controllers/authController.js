const connection = require('../db');
const bcrypt = require('bcrypt');

module.exports = {
  login: (req, res) => {
    console.log('logging in', req.body);
    let { username, password } = req.body;
    password = password.toString();
    connection.query(
      `SELECT * FROM userInfo 
      WHERE username = '${username}'`,
      async (err, data) => {
        if (err) throw err;
        data = data[0];
        const match = await bcrypt.compare(password, data.password);
        if (match) {
          delete data.password;
          data.success = true;
          res.json(data);
        } else {
          data = {
            success: false,
            message: 'Login error',
          };
          res.json(data);
        }
      }
    );
  },
  signUp: (req, res) => {
    console.log('creating new user...');
    console.log(req.body);
    let { username, password } = req.body;
    password = password.toString();
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) throw err;
      connection.query(
        `SELECT username 
      FROM userInfo 
      WHERE username= '${username}'`,
        (err, data) => {
          if (data.length) {
            data = {
              success: false,
              message: 'Username not available, please try again',
            };
            res.json(data);
          } else {
            connection.query(
              `INSERT INTO userInfo (username, password) 
          VALUES ('${req.body.username}','${hash}')`,
              (err, data) => {
                if (err) console.error(err);
                res.json(data.insertId);
              }
            );
          }
        }
      );
    });
  },
};
