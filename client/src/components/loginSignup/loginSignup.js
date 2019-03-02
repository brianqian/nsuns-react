import React, { Component } from 'react';
import './loginSignup';
import { connect } from 'react-redux';
import { userLogin, logOut, createNewUser, openSettings } from '../../actions';
import './loginSignup.css';

class Login extends Component {
  state = {
    userLogin: '',
    pwLogin: '',
    userSignUp: '',
    pwSignUp: '',
    selectSignUp: false,
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  logIn = async e => {
    e.preventDefault();
    const username = this.state.userLogin;
    const password = this.state.pwLogin;
    this.props.userLogin({ username, password });
  };
  signUp = async e => {
    e.preventDefault();
    const username = this.state.userSignUp;
    const password = this.state.pwSignUp;
    this.props.createNewUser({ username, password });
  };

  logOut = () => {
    this.props.logOut();
    localStorage.removeItem('userId');
  };

  closeSettings = () => {
    this.props.openSettings(false);
  };

  render() {
    const { loggedIn, message, showStatus } = this.props.userAuth;
    return (
      <div className="loginSignup__container">
        {!loggedIn && (
          <div className="loginSignup__login-container">
            <form action="">
              <h4>Login:</h4>
              <label htmlFor="userLogin">Username: </label>
              <input
                onChange={this.onChange}
                name="userLogin"
                id="userLogin"
                type="text"
                value={this.state.username}
                autoComplete="username"
              />
              <label htmlFor="pwLogin">Password: </label>
              <input
                onChange={this.onChange}
                name="pwLogin"
                id="pwLogin"
                type="password"
                value={this.state.pwLogin}
                autoComplete="current-password"
              />
              <button onClick={this.logIn} type="submit">
                Login
              </button>
            </form>
          </div>
        )}
        {showStatus && <p>{message}</p>}

        {!loggedIn && (
          <div
            className="loginSignUp__open-signup"
            onClick={() => this.setState({ selectSignUp: true })}
          >
            Sign up
          </div>
        )}

        {this.state.selectSignUp && !loggedIn && (
          <div className="loginSignup__signup-container">
            <form action="">
              <label htmlFor="userSignUp">Username: </label>
              <input
                onChange={this.onChange}
                name="userSignUp"
                id="userSignUp"
                type="text"
                value={this.state.userSignUp}
                autoComplete="username"
              />
              <label htmlFor="pwSignUp">Password: </label>
              <input
                onChange={this.onChange}
                name="pwSignUp"
                id="pwSignUp"
                type="password"
                value={this.state.pwSignUp}
                autoComplete="current-password"
              />
              <button onClick={this.signUp} type="submit">
                Sign Up
              </button>
            </form>
          </div>
        )}

        {loggedIn && (
          <button className="loginSignup__logout" onClick={this.logOut}>
            Log Out
          </button>
        )}
        {this.props.children}
        <button onClick={this.closeSettings}>Close Settings</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLifts: state.userLifts,
  userAuth: state.userAuth,
});
export default connect(
  mapStateToProps,
  { userLogin, logOut, createNewUser, openSettings }
)(Login);
