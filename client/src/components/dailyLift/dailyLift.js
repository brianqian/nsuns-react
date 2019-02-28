import React, { Component } from 'react';
import './dailyLift.css';
import WeightBox from '../weightBox/weightBox';
import AccessoryBox from '../AccessoryBox/AccessoryBox';
import uuidv1 from 'uuid';
import { openAccessoryBox } from '../../actions';
import { connect } from 'react-redux';

class dailyLift extends Component {
  //TODO: should be handled be redux so accessories stay open on accessoryPlan change
  handleClick = () => {
    const { dispatch, accessoryState } = this.props;
    dispatch(openAccessoryBox(accessoryState.openAccessoryBox ? false : true));
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
      accessoryState,
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
          <p className="accessories__button" onClick={this.handleClick}>
            Accessories
          </p>
        </div>
        {accessoryState.openAccessoryBox && (
          <AccessoryBox dayIndex={index} accessories={accessories} />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  accessoryState: state.accessories,
});

export default connect(mapStateToProps)(dailyLift);
