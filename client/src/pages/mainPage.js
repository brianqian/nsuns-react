import React, { Component } from 'react';
import DailyLift from '../components/dailyLift';
import { dailySplits } from '../accessoryPlans';
import WeightEntry from '../components/weightEntry';

export default class mainPage extends Component {
  state = {
    nsunsVariation: '5day',
    standard: 'lbs',
  };
  render() {
    const currentVariation = this.state.nsunsVariation;
    const dailyLifts = dailySplits[currentVariation].map(day => {
      let base1 = day.baseLift[0] + 'TM';
      let base2 = day.baseLift[1] + 'TM';
      // console.log(base1, base2);
      // console.log(this.props.userWeights[base1], this.props.userWeights[base2]);
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
