import React, { Component } from 'react';
import './dailyLift.css';
import helper from '../utils/helper';

class dailyLift extends Component {
  state = {
    accessoriesHidden: true,
  };

  handleClick = e => {
    const box = e.target.id;
    if (!this.state[box]) {
      this.setState({ [box]: true });
    } else {
      this.setState({ [box]: false });
    }
  };

  render() {
    const { day, t1Lift, t2Lift, t1Reps, t1Weights, t2Reps, t2Weights, max1, max2 } = this.props;
    const t1Workouts = [];
    const t2Workouts = [];
    for (let i = 0; i < t1Reps.length; i++) {
      t1Workouts.push(
        <p
          onClick={this.handleClick}
          id={`box-${day}-${i}-t1`}
          className={`workouts ${this.state[`box-${day}-${i}-t1`] ? 'marked' : ''}`}
        >
          {`${t1Reps[i]}x${helper.calcDailyLift(t1Weights[i], max1)} ${this.props.standard}`}
        </p>
      );
    }
    for (let i = 0; i < t2Reps.length; i++) {
      t2Workouts.push(
        <p
          onClick={this.handleClick}
          id={`box-${day}-${i}-t2`}
          className={`workouts ${this.state[`box-${day}-${i}-t2`] ? 'marked' : ''}`}
        >{`${t2Reps[i]}x${helper.calcDailyLift(t2Weights[i], max2)} ${this.props.standard}`}</p>
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
          <p>Accessories</p>
        </div>
      </div>
    );
  }
}

export default dailyLift;
