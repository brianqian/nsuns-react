import React, { Component } from 'react';
import DailyLift from '../components/dailyLift/dailyLift';
import accessories from '../data/accessoryPlans';
import dailySplits from '../data/dailySplits';
import WeightEntry from '../components/weightEntry/weightEntry';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

class mainPage extends Component {
  state = {
    nsunsVariation: '5day',
    standard: 'lbs',
  };
  render() {
    //this page eventually needs to draw state from the store to allow user editing
    const currentVariation = this.state.nsunsVariation;
    const dailyLifts = dailySplits[currentVariation].map((day, index) => {
      const base1 = day.baseLift[0] + 'TM';
      const base2 = day.baseLift[1] + 'TM';
      const accessoryPlan = this.props.userLifts.accessoryPlan || 'arms';
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
          max1={this.props.userLifts[base1] || '0'}
          max2={this.props.userLifts[base2] || '0'}
          standard={this.state.standard}
          key={uuidv1()}
          index={index}
          accessories={accessorySet}
        />
      );
    });
    return (
      <main>
        <WeightEntry />
        {dailyLifts}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  userLifts: state.userLifts,
  accessories: state.accessories,
});

export default connect(mapStateToProps)(mainPage);
