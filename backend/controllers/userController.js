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
    connection.query('UPDATE userInfo SET standard = ?', [req.params.standard], (err, data) => {
      if (err) throw err;
      data.ok = true;
      res.json(data);
    });
  },
};
