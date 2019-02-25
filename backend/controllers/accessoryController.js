const connection = require('../db');

module.exports = {
  createAccessoryPlan: (req, res) => {
    const { userId, basePlan } = req.body;

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
};
