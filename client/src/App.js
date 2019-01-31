import React, { Component } from 'react';
import './App.css';
import DailyLift from './components/dailyLift';
import { dailySplits } from './accessoryPlans';
import WeightEntry from './components/weightEntry';

class App extends Component {
  state = {
    currentSplit: '5day',
  };

  render() {
    const currentSplit = dailySplits[this.state.currentSplit];
    console.log(currentSplit);
    const dailyLifts = currentSplit.map(day => {
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
        />
      );
    });

    return (
      <div className="App">
        <WeightEntry>{dailyLifts}</WeightEntry>
      </div>
    );
  }
}

export default App;
