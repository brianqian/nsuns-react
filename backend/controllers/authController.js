const connection = require('../db');
const bcrypt = require('bcrypt');

module.exports = {
  login: (req, res) => {
    console.log('logging in', req.body);
    let { username, password } = req.body;
    password = password.toString();
    username = username.toString();
    connection.query(
      `SELECT * FROM userInfo 
      WHERE username = ?`,
      [username],
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
    username = username.toString();
    console.log('creating username with ', username, password);
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) throw err;
      connection.query(
        `SELECT username 
      FROM userInfo 
      WHERE username= ?`,
        [username],
        (err, data) => {
          if (err) throw err;
          if (data.length) {
            //If a username with same name is found return error
            res.json({
              ok: false,
              message: 'Username not available, please try again',
            });
          } else {
            connection.query(
              `INSERT INTO userInfo (username, password) 
          VALUES (?,?)`,
              [username, hash],
              (err, data) => {
                if (err) console.error(err);
                res.json({ ok: true });
              }
            );
          }
        }
      );
    });
  },
};
