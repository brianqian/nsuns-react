import React, { Component } from 'react';
import './loginSignup';
import Auth from '../utils/auth';

export default class login extends Component {
  state = {
    userLogin: '',
    pwLogin: '',
    userSignUp: '',
    pwSignUp: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //can combine these two into one function
  logIn = e => {
    e.preventDefault();
    let userId = Auth.login();
    this.props.getId(userId);
  };
  signUp = async e => {
    e.preventDefault();
    const username = this.state.userSignUp;
    const password = this.state.pwSignUp;
    let userId = await Auth.signUp({ username, password });
    this.props.getId(userId);
  };

  render() {
    return (
      <div className="login-signup-container">
        {!this.props.userId && (
          <div className="login-container">
            <form action="">
              Login:
              <label htmlFor="userLogin">Username: </label>
              <input
                onChange={this.onChange}
                name="userLogin"
                id="userLogin"
                type="text"
                value={this.state.userLogin}
              />
              <label htmlFor="pwLogin">Password: </label>
              <input
                onChange={this.onChange}
                name="pwLogin"
                id="pwLogin"
                type="password"
                value={this.state.pwLogin}
              />
              <button onClick={this.logIn} type="submit">
                Login
              </button>
            </form>
          </div>
        )}
        <br />
        {!this.props.userId && (
          <div className="signup-container">
            <form action="">
              Sign Up:
              <label htmlFor="userSignUp">Username: </label>
              <input
                onChange={this.onChange}
                name="userSignUp"
                id="userSignUp"
                type="text"
                value={this.state.userSignUp}
              />
              <label htmlFor="pwSignUp">Password: </label>
              <input
                onChange={this.onChange}
                name="pwSignUp"
                id="pwSignUp"
                type="password"
                value={this.state.pwSignUp}
              />
              <button onClick={this.signUp} type="submit">
                Sign Up
              </button>
            </form>
          </div>
        )}

        {this.props.userId && <button>Log Out</button>}
      </div>
    );
  }
}
