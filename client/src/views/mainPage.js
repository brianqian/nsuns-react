import React from 'react';
import WeightEntry from '../components/weightEntry/weightEntry';
import DailyLiftWrapper from '../components/dailyLift/dailyLiftWrapper';
import { connect } from 'react-redux';

function MainPage(props) {
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
