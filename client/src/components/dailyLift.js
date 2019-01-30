import React, { Component } from 'react';
import './dailyLift.css';

class dailyLift extends Component {
  state = {
    accessoriesHidden: true,
  };

  render() {
    function repWeightCalculator(percentage, tm) {
      const repWeight = tm * percentage;
      return Math.round(repWeight / 5) * 5;
    }
    const { day, data, max1, max2 } = this.props;
    const t1Workouts = [];
    for (let i = 0; i < data.t1Reps.length; i++) {
      t1Workouts.push(
        <p>{`${data.t1Reps[i]} x ${repWeightCalculator(max1, data.t1Weights[i])}`}</p>
      );
    }

    // const t1Workouts = data.t1Reps.map(rep => {
    //   return <p>{`${rep} x test`}</p>;
    // });

    return (
      <div className={`${day}-daily-lift daily-lift`}>
        <h2 className="day-title">{day}</h2>
        <div className="daily-lift-t1">
          <h3 className="t1-title">{data.lifts[0]}</h3>
          <div className={`t1-workouts ${day}-workouts`}>{t1Workouts}</div>
        </div>
        <div className="daily-lift-t2">
          <h3 className="t2-title">{data.lifts[1]}</h3>
          <div className={`t2-workouts ${day}-workouts`} />
        </div>
      </div>
    );
  }
}

export default dailyLift;
