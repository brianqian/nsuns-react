import React, { Component } from 'react';
import './App.css';
import MainPage from './views/mainPage';
import GraphPage from './views/graphPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserSettings from './components/UserSettings/UserSettings';
import { connect } from 'react-redux';
import { jwtLogin } from './actions/';

class App extends Component {
  state = {
    showSettings: false,
  };
  toggleSettings = () => {
    this.setState({ showSettings: this.state.showSettings ? false : true });
  };

  componentDidMount = () => {
    const userToken = localStorage.getItem('userId');
    console.log(userToken);
    if (userToken) this.props.dispatch(jwtLogin(userToken));
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
              {/* <Route exact path="/graph" component={GraphPage} /> */}
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default connect()(App);
