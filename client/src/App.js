import React, { Component } from 'react';
import './App.css';
import MainPage from './views/mainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import UserSettings from './components/UserSettings/UserSettings';

class App extends Component {
  state = {
    showSettings: false,
  };
  toggleSettings = () => {
    this.setState({ showSettings: this.state.showSettings ? false : true });
  };
  render() {
    return (
      <div className="App">
        {this.state.showSettings && <UserSettings />}
        <button onClick={this.toggleSettings}>Login/Settings</button>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
