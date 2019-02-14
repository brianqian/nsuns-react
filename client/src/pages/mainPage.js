import React, { Component } from 'react';
import DailyLift from '../components/dailyLift/dailyLift';
import { dailySplits, accessories } from '../accessoryPlans';
import WeightEntry from '../components/weightEntry/weightEntry';

export default class mainPage extends Component {
  state = {
    nsunsVariation: '5day',
    standard: 'lbs',
  };
  render() {
    const currentVariation = this.state.nsunsVariation;
    const dailyLifts = dailySplits[currentVariation].map((day, index) => {
      const base1 = day.baseLift[0] + 'TM';
      const base2 = day.baseLift[1] + 'TM';
      const accessoryPlan = this.props.userInfo.accessoryPlan || 'arms';
      const accessorySet = accessories[accessoryPlan][index];
      console.log(accessorySet, index);
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
          max1={this.props.userInfo[base1] || '0'}
          max2={this.props.userInfo[base2] || '0'}
          standard={this.state.standard}
          key={index}
          accessories={accessorySet}
        />
      );
    });
    return (
      <div>
        {/* <h3>Current Variation: {this.state.nsunsVariation}</h3>
          <button onClick={this.toggleSplit}>Toggle Variation</button> */}
        <WeightEntry
          getInfo={this.getUserInfo}
          changeWeights={this.props.changeWeights}
          userInfo={this.props.userInfo}
        >
          {dailyLifts}
        </WeightEntry>
      </div>
    );
  }
}
