import React, { Component } from 'react';
import './App.css';
import LoginSignup from './components/loginSignup/loginSignup';
import MainPage from './pages/mainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { swapTmRm } from './utils/helper';

class App extends Component {
  state = {
    nsunsVariation: '5day',
    standard: 'lbs',
    userInfo: {},
  };

  //toggle split will eventually be its own component, most likely with a dropdown.
  //value will be passed back up with React.createRef
  toggleSplit = () => {
    if (this.state.nsunsVariation === '4day') {
      this.setState({ nsunsVariation: '5day' });
    } else if (this.state.nsunsVariation === '5day') {
      this.setState({ nsunsVariation: '4day' });
    }
  };

  getUserInfo = userInfo => {
    console.log('now in app:', userInfo);
    this.setState({ userInfo });
  };

  logOut = () => {
    this.setState({ userInfo: {} });
  };

  changeWeights = (name, value) => {
    value = parseInt(value);
    const userInfo = this.state.userInfo;
    userInfo[name] = value;
    let [swappedName, swappedValue] = swapTmRm(name, value);
    userInfo[swappedName] = swappedValue;
    this.setState({ userInfo });
  };

  logProps = () => {
    console.log(this.props);
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={this.logProps}>console.log app props</button>
        <header>
          <LoginSignup
            userInfo={this.state.userInfo}
            getInfo={this.getUserInfo}
            logOut={this.logOut}
          />
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
