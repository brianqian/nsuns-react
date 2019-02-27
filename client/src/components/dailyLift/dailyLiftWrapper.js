import React from 'react';
import DailyLift from './dailyLift';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

function dailyLiftWrapper(props) {
  const { nsunsVariation } = props.userLifts;
  const { dailySplits, accessories } = props;
  const { accessoryPlan } = accessories;
  const dailyLifts = dailySplits[nsunsVariation].map((day, index) => {
    const base1 = day.baseLift[0] + 'TM';
    const base2 = day.baseLift[1] + 'TM';
    const accessorySet = accessories[accessoryPlan][index];
    return (
      <DailyLift
        day={day.day}
        t1Lift={day.lifts[0]}
        t2Lift={day.lifts[1]}
        t1Base={day.baseLift[0]}
        t2Base={day.baseLift[1]}
        t1Weights={day.t1Weights}
        t1Reps={day.t1Reps}
        t2Weights={day.t2Weights}
        t2Reps={day.t2Reps}
        max1={props.userLifts[base1] || '0'}
        max2={props.userLifts[base2] || '0'}
        standard={'lbs'}
        key={uuidv1()}
        index={index}
        accessories={accessorySet}
      />
    );
  });
  return <div className="daily-lift-wrapper">{dailyLifts}</div>;
}

const mapStateToProps = state => ({
  userLifts: state.userLifts,
  accessories: state.accessories,
  dailySplits: state.dailySplits,
});

export default connect(mapStateToProps)(dailyLiftWrapper);
