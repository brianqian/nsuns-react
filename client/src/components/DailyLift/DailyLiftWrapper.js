import React from 'react';
import DailyLift from './DailyLift';
import { connect } from 'react-redux';

// function DailyLiftWrapper(props) {
function DailyLiftWrapper({ userLifts, dailySplits, dailySplits: { nsunsVariation } }) {
  const dailyLifts = dailySplits[nsunsVariation].map((day, index) => {
    const base1 = day.baseLift[0] + 'TM';
    const base2 = day.baseLift[1] + 'TM';
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
        max1={userLifts[base1] || '0'}
        max2={userLifts[base2] || '0'}
        standard={dailySplits.standard}
        key={'dl' + index}
        dayIndex={index}
      />
    );
  });
  return <div className="daily-lift-wrapper">{dailyLifts}</div>;
}

const mapStateToProps = state => ({
  userLifts: state.userLifts,
  dailySplits: state.dailySplits,
});

export default connect(mapStateToProps)(DailyLiftWrapper);
