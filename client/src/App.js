import React, { Component } from 'react';
import './App.css';
import UserSettings from './components/UserSettings/UserSettings';
import { connect } from 'react-redux';
import { jwtLogin, openSettings } from './actions';
import MainPage from './views/mainPage';

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
    const { username } = this.props.userAuth;
    return (
      <div className="App">
        <UserSettings />
        <header>
          <p> {username && `Welcome ${username}`}</p>
          <div className="App__settings-button" onClick={this.toggleSettings}>
            Login/Settings
          </div>
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  settingsOpen: state.userSettings.settingsOpen,
  accessories: state.accessories,
  userAuth: state.userAuth,
  userSettings: state.userSettings,
  userLifts: state.userLifts,
});

export default connect(mapStateToProps)(App);
