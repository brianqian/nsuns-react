const connection = require('../db');

module.exports = {
  saveUserLifts: (req, res) => {
    console.log('saveUserInfo');
    const {
      benchRM,
      benchTM,
      deadliftRM,
      deadliftTM,
      ohpRM,
      ohpTM,
      squatRM,
      squatTM,
      userId,
    } = req.body;
    const info = [benchRM, benchTM, deadliftRM, deadliftTM, ohpRM, ohpTM, squatRM, squatTM, userId];
    connection.query(
      `UPDATE userInfo SET benchRM = ?,
      benchTM = ?,
      deadliftRM = ?,
      deadliftTM = ?,
      ohpRM = ?,
      ohpTM = ?,
      squatRM = ?,
      squatTM = ?
    WHERE id = ?`,
      info,
      (err, data) => {
        if (err) throw err;
        data.ok = true;
        res.json(data);
      }
    );
  },
  saveStandard: (req, res) => {
    const { userId } = req.body;
    connection.query(
      'UPDATE userSettings SET standard = ? WHERE userId= ?',
      [req.params.standard, userId],
      (err, data) => {
        if (err) throw err;
        data.ok = true;
        res.json(data);
      }
    );
  },
  saveWeightBoxOption: (req, res) => {
    const { userId, option } = req.body;
    connection.query(
      'UPDATE userSettings SET wbOption = ? WHERE userId= ?',
      [option, userId],
      (err, data) => {
        if (err) throw err;
        data.ok = true;
        res.json(data);
      }
    );
  },
  saveTimerOption: (req, res) => {
    const { userId, option } = req.body;
    connection.query(
      'UPDATE userSettings SET timerOption = ? WHERE userId= ?',
      [option, userId],
      (err, data) => {
        if (err) throw err;
        data.ok = true;
        res.json(data);
      }
    );
  },
  saveVariation: (req, res) => {
    const { userId, option } = req.body;
    connection.query(
      'UPDATE userSettings SET nsunsVariation = ? WHERE userId= ?',
      [option, userId],
      (err, data) => {
        if (err) throw err;
        data.ok = true;
        res.json(data);
      }
    );
  },
  getUserSettings: (req, res) => {
    console.log(req.params);
    connection.query(
      'SELECT * FROM userSettings WHERE userId = ?',
      [req.params.userId],
      (err, data) => {
        if (err) throw err;
        [data] = data;
        data.ok = true;
        console.log(data);
        res.json(data);
      }
    );
  },
  seedSettings: (req, res) => {
    const { userId } = req.body;
    connection.query('INSERT INTO userSettings (userId) VALUES (?)', [userId], (err, data) => {
      console.log('USER SETTINGS', data);
      res.json(data);
    });
  },
};
