import React from 'react';
import WeightEntry from '../components/WeightEntry/WeightEntry';
import DailyLiftWrapper from '../components/DailyLift/DailyLiftWrapper';
import { connect } from 'react-redux';

function MainPage() {
  return (
    <div>
      <WeightEntry />
      <DailyLiftWrapper />
    </div>
  );
}
// const mapStateToProps = state => ({
//   userAuth: state.userAuth,
//   userLifts: state.userLifts,
//   accessories: state.accessories,
// });

export default connect()(MainPage);
