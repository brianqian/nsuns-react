import React, { Component } from 'react';
import './dailyLift.css';

class dailyLift extends Component {
  state = {
    accessoriesHidden: true,
  };

  render() {
    const { day, t1Lift, t2Lift, t1Reps, t1Weights, t2Reps, t2Weights, max1, max2 } = this.props;

    function repWeightCalculator(percentage, tm) {
      const repWeight = tm * percentage;
      return Math.round(repWeight / 5) * 5;
    }
    const t1Workouts = [];
    const t2Workouts = [];
    for (let i = 0; i < t1Reps.length; i++) {
      t1Workouts.push(
        <p className="t1-workouts">{`${t1Reps[i]} x ${repWeightCalculator(t1Weights[i], max1)}`}</p>
      );
    }
    for (let i = 0; i < t2Reps.length; i++) {
      t2Workouts.push(
        <p className="t2-workouts">{`${t2Reps[i]} x ${repWeightCalculator(t2Weights[i], max2)}`}</p>
      );
    }

    // const t1Workouts = data.t1Reps.map(rep => {
    //   return <p>{`${rep} x test`}</p>;
    // });

    return (
      <div className={`${day}-daily-lift daily-lift`}>
        <h2 className="day-title">{day}</h2>
        <div className="daily-lift-t1">
          <h3 className="t1-title lift-title">{t1Lift}</h3>
          {t1Workouts}
        </div>
        <div className="daily-lift-t2">
          <h3 className="t2-title lift-title">{t2Lift}</h3>
          {t2Workouts}
          <p>Accessories</p>
        </div>
      </div>
    );
  }
}

export default dailyLift;
