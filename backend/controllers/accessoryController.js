const connection = require('../db');

module.exports = {
  createAccessoryPlan: (req, res) => {
    const { userId, basePlan } = req.body;
    //Checks for an existing custom plan and doesn't create one if one exists.
    //Custom plans should only be created once.
    connection.query('SELECT * FROM accessories WHERE userId = ?', [userId], (err, data) => {
      if (data.length) {
        res.json({ ok: false });
        return;
      }
    });
    const values = [];
    console.log('baseplan', basePlan);
    basePlan.forEach((day, dayIndex) => {
      day.forEach(exercise => {
        const { title, sets, reps, weight } = exercise;
        values.push([userId, title, sets, reps, weight, dayIndex]);
      });
    });
    connection.query(
      'INSERT INTO accessories (userId, title, sets, reps, weight, dayIndex) VALUES ?',
      [values],
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );
  },
  getAccessoryPlan: (req, res) => {
    connection.query(
      `SELECT * FROM accessories WHERE userId = ?`,
      [req.params.userId],
      (err, data) => {
        if (err) throw err;
        res.json(data);
      }
    );
  },
  editAccessory: (req, res) => {
    console.log(req.body);
    // connection.query('UPDATE accessories SET title = ?, sets = ?, reps = ?, weight = ? WHERE userId = ? AND dayIndex = ? AND accIndex = ?', )
  },
};
