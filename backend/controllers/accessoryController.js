const connection = require('../db');

module.exports = {
  createAccessoryPlan: (req, res) => {
    const { userId, basePlan } = req.body;
    console.log(req.body.basePlan);
    //Checks for an existing custom plan and doesn't create one if one exists.
    //Custom plans should only be created once.
    connection.query('SELECT * FROM accessories WHERE userId = ?', [userId], (err, data) => {
      if (!data.length) {
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
            const { affectedRows, insertId } = data;
            res.json({ affectedRows, insertId });
          }
        );
      }
    });
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
    console.log('EDIT ACCESSORY CONTROLLER', req.body);
    const { title, sets, reps, weight, userId, id } = req.body;
    const info = [title, sets, reps, weight, userId, id];
    connection.query(
      'UPDATE accessories SET title = ?, sets = ?, reps = ?, weight = ? WHERE userId = ? AND id = ?',
      info,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        res.json({ ok: true });
      }
    );
  },
  deleteAccessory: (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    connection.query('DELETE FROM accessories WHERE id = ?', [id], (err, data) => {
      if (err) throw err;
      data.ok = data.affectedRows ? true : false;
      data.ok && console.log('Item id', id, 'successfully deleted');
      res.json(data);
    });
  },
  addAccessory: (req, res) => {
    console.log(req.body);
    const { title, sets, reps, weight, dayIndex } = req.body;
    const info = [title, sets, reps, weight, dayIndex, req.params.userId];
    connection.query(
      'INSERT INTO accessories (title, sets, reps, weight, dayIndex, userId) VALUES (?, ?, ?, ?, ?, ?)',
      info,
      (err, data) => {
        if (err) throw err;
        res.json(data);
      }
    );
  },
  saveAccessoryPlan: (req, res) => {
    const { plan, id } = req.body;
    connection.query(
      'UPDATE userInfo SET accessoryPlan = ? WHERE id = ?',
      [plan, id],
      (err, data) => {
        if (err) throw err;
        // console.log('SAVE ACC PLAN', data);
        res.json(data);
      }
    );
  },
};
