const connection = require('../db');
const bcrypt = require('bcrypt');

module.exports = {
  login: (req, res) => {
    console.log('logging in', req.body);
    let { username, password } = req.body;
    console.log(username, password);
    password = password.toString();
    connection.query(
      `SELECT * FROM userInfo 
      WHERE username = '${username}'`,
      async (err, data) => {
        if (err) throw err;
        data = data[0];
        if (!data) {
          res.json({ ok: false, message: 'Login Error' });
          return;
        }
        //Bcrypt password compare
        const match = await bcrypt.compare(password, data.password);
        if (match) {
          delete data.password;
          data.ok = true;
          res.json(data);
        } else {
          res.json({ ok: false, message: 'Login error' });
        }
      }
    );
  },
  signUp: (req, res) => {
    console.log('starting creating new user...');
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
          if (err) throw err;
          if (data.length) {
            //If a username with same name is found return error
            res.json({
              ok: false,
              message: 'Username not available, please try again',
            });
          } else {
            console.log('user succesfully created');
            connection.query(
              `INSERT INTO userInfo (username, password) 
          VALUES ('${req.body.username}','${hash}')`,
              (err, data) => {
                if (err) console.error(err);
                res.json({ ok: true });
                connection.query(
                  `INSERT INTO accessories (userId) VALUES (${data.insertId})`,
                  (err, data) => {
                    if (err) throw err;
                  }
                );
              }
            );
          }
        }
      );
    });
  },
};
