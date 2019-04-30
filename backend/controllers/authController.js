const connection = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: (req, res) => {
    console.log("logging in", req.body);
    let { username, password } = req.body;
    password = password.toString();
    username = username.toString();
    connection.query("SELECT * FROM userInfo WHERE username = ?", [username], async (err, data) => {
      if (err) throw err;
      [data] = data;
      if (!data) {
        res.json({ ok: false, message: "Username not found" });
        return;
      }
      //Bcrypt password compare
      const match = await bcrypt.compare(password, data.password);
      if (match) {
        delete data.password;
        data.ok = true;
        data.token = jwt.sign({ userId: data.id }, process.env.SECRET_KEY, {
          expiresIn: "60d",
        });
        res.json(data);
      } else {
        res.json({ ok: false, message: "Incorrect password" });
      }
    });
  },
  jwtLogin: (req, res) => {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded, decoded.userId);
    connection.query("SELECT * FROM userInfo WHERE id = ?", [decoded.userId], (err, data) => {
      if (err) throw err;
      [data] = data;

      if (!data) {
        res.json({ ok: false, message: "" });
      } else {
        delete data.password;
        data.ok = true;
        res.json(data);
      }
    });
  },
  signUp: (req, res) => {
    console.log("starting creating new user...");
    console.log(req.body);
    let { username, password } = req.body;
    password = password.toString();
    username = username.toString();
    console.log("creating username with ", username, password);
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
              message: "Username not available, please try again",
            });
          } else {
            connection.query(
              `INSERT INTO userInfo (username, password) 
          VALUES (?,?)`,
              [username, hash],
              (err, data) => {
                if (err) console.error(err);
                res.json({ ...data, ok: true });
              }
            );
          }
        }
      );
    });
  },
};
