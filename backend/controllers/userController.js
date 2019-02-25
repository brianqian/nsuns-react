const connection = require('../db');

module.exports = {
  saveUserInfo: (req, res) => {
    console.log('saveUserInfo');
    const data = req.body;
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
      Object.values(data),
      (err, data) => {
        if (err) throw err;
        res.send();
      }
    );
  },
};
