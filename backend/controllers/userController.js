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
      'UPDATE userInfo SET standard = ? WHERE id= ?',
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
      'UPDATE userInfo SET wbOption = ? WHERE id= ?',
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
      'UPDATE userInfo SET timerOption = ? WHERE id= ?',
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
      'UPDATE userInfo SET nsunsVariation = ? WHERE id= ?',
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
      'SELECT standard, timerOption, wbOption, variation, accessoryPlan FROM userInfo WHERE id = ?',
      [req.params.userId],
      (err, data) => {
        if (err) throw err;
        data = data[0];
        data.ok = true;
        console.log(data);
        res.json(data);
      }
    );
  },
};
