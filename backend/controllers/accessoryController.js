const connection = require('../db');

module.exports = {
  createAccessoryPlan: (req, res) => {
    const { userId, basePlan } = req.body;

    const values = [];
    basePlan.forEach((day, dayIndex) => {
      day.forEach((exercise, accIndex) => {
        const { title, sets, reps, weight } = exercise;
        values.push([userId, title, sets, reps, weight, dayIndex, accIndex]);
      });
    });
    console.log(values);

    connection.query(
      'INSERT INTO accessories (userId, title, sets, reps, weight, dayIndex, accIndex) VALUES ?',
      [values],
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );
  },
  getAccessoryPlan: (req, res) => {
    console.log(req.body);
    //TODO: add resp.ok if plan exists, else, !resp.ok
  },
};
