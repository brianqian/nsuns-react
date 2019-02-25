const connection = require('../db');

module.exports = {
  // getUserInfo: (req, res) => {
  //   console.log('getUserInfo userid:', req.query.user);
  //   connection.query(
  //     `SELECT * FROM userInfo INNER JOIN accessories ON userInfo.id=accessories.userId WHERE id = ${
  //       req.query.user
  //     } `,
  //     (err, data) => {
  //       if (err) throw err;
  //       console.log(data);
  //       res.json(data);
  //     }
  //   );
  // },
  saveUserInfo: (req, res) => {
    console.log('saveUserInfo');
    const data = req.body;
    connection.query(
      `UPDATE userInfo SET squatTM = ${data.squatTM},
    benchTM = ${data.benchTM},
    ohpTM = ${data.ohpTM},
    deadliftTM = ${data.deadliftTM},
    squatRM = ${data.squatRM},
    benchRM = ${data.benchRM},
    ohpRM = ${data.ohpRM},
    deadliftRM = ${data.deadliftRM}
    WHERE id = ${data.userId}`,
      (err, data) => {
        if (err) throw err;
        res.send();
      }
    );
  },
};
