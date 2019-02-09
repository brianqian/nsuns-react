const connection = require('../db');

module.exports = {
  login: (req, res) => {
    console.log(req.body);
    connection.query(
      `SELECT * FROM userInfo 
  WHERE username = '${req.body.username}' AND password = '${req.body.password}'`,
      (err, data) => {
        if (err) throw err;
        if (!data.length) {
          console.log('login error!');
          res.json('Login Error');
        } else if (data.length === 1) {
          console.log(data);
          res.json(data);
          // console.log('acct found!', data);
        }
      }
    );
  },
  signUp: (req, res) => {
    console.log('creating new user...');
    console.log(req.body);
    connection.query(
      `SELECT username FROM userInfo WHERE username= '${req.body.username}'`,
      (err, data) => {
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
      }
    );
  },
};
