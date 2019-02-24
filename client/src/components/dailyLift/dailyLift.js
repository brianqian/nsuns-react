import React, { Component } from 'react';
import './dailyLift.css';
import WeightBox from '../weightBox/weightBox';
import AccessoryBox from '../accessoryBox/accessoryBox';
import uuidv1 from 'uuid';

class dailyLift extends Component {
  state = {
    showAccessories: false,
  };

  handleClick = () => {
    this.setState({ showAccessories: this.state.showAccessories ? false : true });
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
      index,
      accessories,
    } = this.props;

    const t1Workouts = t1Reps.map((rep, i) => {
      return (
        <WeightBox
          key={uuidv1()}
          reps={rep}
          weights={t1Weights[i]}
          max={max1}
          standard={standard}
        />
      );
    });
    const t2Workouts = t2Reps.map((rep, i) => {
      return (
        <WeightBox
          key={uuidv1()}
          reps={rep}
          weights={t2Weights[i]}
          max={max2}
          standard={standard}
        />
      );
    });
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
          <p onClick={this.handleClick}>Accessories</p>
        </div>
        {this.state.showAccessories && <AccessoryBox dayIndex={index} accessories={accessories} />}
      </div>
    );
  }
}

export default dailyLift;
