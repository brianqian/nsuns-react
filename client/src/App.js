import React, { Component } from 'react';
import './App.css';
import DailyLift from './components/dailyLift';
import { dailySplits } from './accessoryPlans';

class App extends Component {
  state = {
    benchMax: 185,
    deadliftMax: 210,
    squatMax: 190,
    ohpMax: 100,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Weight entry goes here</header>
        <DailyLift
          day="Monday"
          data={dailySplits.monday}
          max1={this.state.benchMax}
          max2={this.state.ohpMax}
        />
        <DailyLift day="Tuesday" data={dailySplits.tuesday} />
        <DailyLift day="Wednesday" data={dailySplits.wednesday} />
        <DailyLift day="Thursday" data={dailySplits.thursday} />
        <DailyLift day="Friday" data={dailySplits.friday} />
      </div>
    );
  }
}

export default App;
