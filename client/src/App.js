import React, { Component } from 'react';
import './App.css';
import MainPage from './views/mainPage';
import GraphPage from './views/graphPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserSettings from './components/UserSettings/UserSettings';
import { connect } from 'react-redux';
import { jwtLogin, openSettings } from './actions';

class App extends Component {
  componentDidMount = () => {
    const userToken = localStorage.getItem('userId');
    if (userToken) this.props.dispatch(jwtLogin(userToken));
  };

  toggleSettings = () => {
    const { dispatch, settingsOpen } = this.props;
    dispatch(openSettings(settingsOpen ? false : true));
  };

  render() {
    return (
      <div className="App">
        <UserSettings />
        <div className="App__settings-button" onClick={this.toggleSettings}>
          Login/Settings
        </div>
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
const mapStateToProps = state => ({
  settingsOpen: state.userSettings.settingsOpen,
  accessories: state.accessories,
  userAuth: state.userAuth,
});

export default connect(mapStateToProps)(App);
