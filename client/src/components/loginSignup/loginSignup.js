import React, { Component } from 'react';
import './loginSignup';
import Auth from '../../utils/auth';
import { userLogin } from '../../actions/actionCreators';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    userLogin: '',
    pwLogin: '',
    userSignUp: '',
    pwSignUp: '',
    showStatus: false,
    statusMessage: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //can combine these two into one function
  logIn = async e => {
    e.preventDefault();
    await this.setState({ showStatus: false, statusMessage: '' });
    const username = this.state.userLogin;
    const password = this.state.pwLogin;
    this.props.dispatch(userLogin({ username, password }));
    // let userInfo = await Auth.logIn({ username, password });
    // if (!userInfo.success) {
    //   console.log('error!', userInfo);
    //   this.setState({ showStatus: true, statusMessage: userInfo.message });
    // } else {
    //   console.log(userInfo);
    //   // console.log(this.props);
    //   this.props.getInfo(userInfo);
    // }
  };
  signUp = async e => {
    e.preventDefault();
    const username = this.state.userSignUp;
    const password = this.state.pwSignUp;
    let userInfo = await Auth.signUp({ username, password });
    console.log(userInfo);
    if (!userInfo.success) {
      console.log('error!', userInfo);
      this.setState({ showStatus: true, statusMessage: userInfo.message });
    } else if (userInfo.success) {
      this.setState({ showStatus: true, statusMessage: 'User successfully created' });
      userInfo = await Auth.logIn({ username, password });
      console.log('AUTH LOGIN: ', userInfo);
      // this.props.getInfo(userInfo);
    }
  };

  logOut = () => {
    this.setState({ showStatus: false, statusMessage: '' });
    this.props.logOut();
  };

  testing = () => {
    console.log(this.props);
  };

  render() {
    console.log(this.props);
    return (
      <div className="login-signup-container">
        <div className="login-container">
          <button onClick={this.testing}>console.log userSignup Props</button>
          <form action="">
            Login:
            <label htmlFor="userLogin">Username: </label>
            <input
              onChange={this.onChange}
              name="userLogin"
              id="userLogin"
              type="text"
              value={this.state.userLogin}
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
        {this.state.showStatus && <p>{this.state.statusMessage}</p>}
        <br />

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

        <button onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLifts: state.userLifts,
  userAuth: state.userAuth,
});
export default connect(mapStateToProps)(Login);
