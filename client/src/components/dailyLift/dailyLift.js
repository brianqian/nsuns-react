import React, { Component } from 'react';
import './dailyLift.css';
import WeightBox from '../weightBox/weightBox';
import AccessoryBox from '../accessoryBox';

class dailyLift extends Component {
  state = {
    accessoriesHidden: true,
  };

  render() {
    const {
      day,
      t1Lift,
      t2Lift,
      t1Reps,
      t1Weights,
      t2Reps,
      t2Weights,
      max1,
      max2,
      standard,
    } = this.props;
    const t1Workouts = [];
    const t2Workouts = [];
    for (let i = 0; i < t1Reps.length; i++) {
      t1Workouts.push(
        <WeightBox reps={t1Reps[i]} weights={t1Weights[i]} max={max1} standard={standard} />
      );
    }
    for (let i = 0; i < t2Reps.length; i++) {
      t2Workouts.push(
        <WeightBox reps={t2Reps[i]} weights={t2Weights[i]} max={max2} standard={standard} />
      );
    }

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
          <AccessoryBox />
        </div>
      </div>
    );
  }
}

export default dailyLift;
