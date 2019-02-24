const connection = require('../db');

module.exports = {
  createCustom: (req, res) => {
    console.log(req.body);
    const { userId, basePlan } = req.body;
    const values = basePlan.map();
    connection.query(
      'INSERT INTO accessories (userId, name, sets, reps, weight, dayIndex, accIndex) VALUES ?'
    );
  },
};
