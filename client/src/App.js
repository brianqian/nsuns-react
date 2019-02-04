import React, { Component } from 'react';
import './App.css';
import DailyLift from './components/dailyLift';
import { dailySplits } from './accessoryPlans';
import WeightEntry from './components/weightEntry';
import LoginSignup from './components/loginSignup';

class App extends Component {
  state = {
    nsunsVariation: '5day',
    userId: '',
    standard: 'lbs',
  };

  componentDidMount = () => {};

  //toggle split will eventually be its own component, most likely with a dropdown.
  //value will be passed back up with React.createRef
  toggleSplit = () => {
    if (this.state.nsunsVariation === '4day') {
      this.setState({ nsunsVariation: '5day' });
    } else if (this.state.nsunsVariation === '5day') {
      this.setState({ nsunsVariation: '4day' });
    }
  };

  getUserInfo = userObj => {
    // this.setState({ userId });
    console.log('now in app:', userObj);
    if (userObj) {
      this.setState({ userId: userObj.id });
    }
  };

  logOut = () => {
    this.setState({ userId: '' });
  };

  render() {
    const currentVariation = this.state.nsunsVariation;
    const dailyLifts = dailySplits[currentVariation].map(day => {
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
          standard={this.state.standard}
        />
      );
    });

    return (
      <div className="App">
        <header>
          {/* <h3>Current Variation: {this.state.nsunsVariation}</h3>
          <button onClick={this.toggleSplit}>Toggle Variation</button> */}
          <LoginSignup userId={this.state.userId} getInfo={this.getUserInfo} logOut={this.logOut} />
        </header>
        <WeightEntry userId={this.state.userId} getInfo={this.getUserInfo}>
          {dailyLifts}
        </WeightEntry>
      </div>
    );
  }
}

export default App;
