import React, { Component } from 'react';
import './dailyLift.css';

class dailyLift extends Component {
  state = {
    accessoriesHidden: true,
  };

  render() {
    return (
      <div className={`${this.props.day}-daily-lift daily-lift`}>
        <h2 className="day-title">{this.props.day}</h2>
        <div className="daily-lift-t1">
          <h3 className="t1-title">{this.props.t1}</h3>
          <div className={`t1-workouts ${this.props.day}-workouts`} />
        </div>
        <div className="daily-lift-t2">
          <h3 className="t2-title">{this.props.t2}</h3>
          <div className={`t2-workouts ${this.props.day}-workouts`} />
        </div>
      </div>
    );
  }
}

export default dailyLift;
