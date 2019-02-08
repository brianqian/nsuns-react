import React, { Component } from 'react';
import './App.css';
import LoginSignup from './components/loginSignup';
import MainPage from './pages/mainPage';

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
    // const { benchTM, ohpTM, deadliftTM, squatTM, id } = userObj;
    // this.setState({ benchTM, ohpTM, deadliftTM, squatTM, userId: id });
  };

  logOut = () => {
    this.setState({ userInfo: {} });
  };

  changeUserWeights = (name, value) => {
    value = parseInt(value);
    const userInfo = this.state.userInfo;
    userInfo[name] = value;
    this.setState({ userInfo });
    console.log(this.state.userInfo);
  };

  render() {
    return (
      <div className="App">
        <header>
          <LoginSignup
            userId={this.state.userInfo.id}
            getInfo={this.getUserInfo}
            logOut={this.logOut}
          />
        </header>
        <MainPage
          userId={this.state.userInfo.id}
          userWeights={this.state.userInfo}
          changeWeights={this.changeUserWeights}
        />
      </div>
    );
  }
}

export default App;
