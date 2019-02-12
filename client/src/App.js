import React, { Component } from 'react';
import './App.css';
import LoginSignup from './components/loginSignup';
import MainPage from './pages/mainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    nsunsVariation: '5day',
    userId: '',
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

  changeUserWeights = (name, value) => {
    // if (!value) value = 0;
    value = parseInt(value);
    const userInfo = this.state.userInfo;
    userInfo[name] = value;
    this.setState({ userInfo });
  };

  render() {
    return (
      <div className="App">
        <header>
          <LoginSignup
            userInfo={this.state.userInfo}
            getInfo={this.getUserInfo}
            logOut={this.logOut}
          />
        </header>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <MainPage
                  {...props}
                  userInfo={this.state.userInfo}
                  changeWeights={this.changeUserWeights}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
