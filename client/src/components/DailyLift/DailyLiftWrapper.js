import React from 'react';
import DailyLift from './DailyLift';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DailyLiftContainer = styled.div`
  @media (max-width: 800px) {
    scroll-snap-type: x mandatory;
    width: 100vw;
    display: grid;
    grid-template-columns: ${props => `repeat(${props.days}, 1fr)`};
    overflow: auto;
  }
`;

// function DailyLiftWrapper(props) {
function DailyLiftWrapper({
  userLifts,
  dailySplits,
  userSettings,
  userSettings: { variation, cap3Week },
}) {
  if (variation === 'cap3') variation = variation + cap3Week;
  const dailyLifts = dailySplits[variation].map((day, index) => {
    const base1 = day.baseLift[0] + 'TM';
    const base2 = day.baseLift[1] + 'TM';
    return (
      <DailyLift
        day={day.day}
        t1Lift={day.lifts[0] || ''}
        t2Lift={day.lifts[1] || ''}
        t1Base={day.baseLift[0] || ''}
        t2Base={day.baseLift[1] || ''}
        t1Weights={day.t1Weights || ''}
        t1Reps={day.t1Reps || ''}
        t2Weights={day.t2Weights || ''}
        t2Reps={day.t2Reps || ''}
        max1={userLifts[base1] || '0'}
        max2={userLifts[base2] || '0'}
        standard={userSettings.standard}
        key={JSON.stringify(day)}
        dayIndex={index}
      />
    );
  });
  return <DailyLiftContainer days={dailySplits[variation].length}>{dailyLifts}</DailyLiftContainer>;
}

const mapStateToProps = state => ({
  userLifts: state.userLifts,
  dailySplits: state.dailySplits,
  userSettings: state.userSettings,
});

export default connect(mapStateToProps)(DailyLiftWrapper);
