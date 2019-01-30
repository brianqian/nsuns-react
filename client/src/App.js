import React, { Component } from 'react';
import './App.css';
import DailyLift from './components/dailyLift';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Weight entry goes here</header>
        <DailyLift day="Monday" t1="Bench" t2="OHP" />
        <DailyLift day="Tuesday" t1="Squat" t2="Sumo Dead" />
        <DailyLift day="Wednesday" t1="OHP" t2="Incline Bench" />
        <DailyLift day="Thursday" t1="Deadlift" t2="Front Squat" />
        <DailyLift day="Friday" t1="Bench" t2="Close Grip Bench" />
      </div>
    );
  }
}

export default App;
