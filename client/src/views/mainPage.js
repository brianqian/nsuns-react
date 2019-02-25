import React from 'react';
import WeightEntry from '../components/weightEntry/weightEntry';
import DailyLiftWrapper from '../components/dailyLift/dailyLiftWrapper';
import AccessorySelector from '../components/AccessorySelector/AccessorySelector';
import { connect } from 'react-redux';

function MainPage(props) {
  console.log(props.accessories.custom !== undefined);
  return (
    <main>
      <AccessorySelector customOption={props.accessories.custom !== undefined} />
      <WeightEntry />
      <DailyLiftWrapper />
    </main>
  );
}
const mapStateToProps = state => ({
  userAuth: state.userAuth,
  userLifts: state.userLifts,
  accessories: state.accessories,
});

export default connect(mapStateToProps)(MainPage);
