import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin, logOut, createNewUser } from "../../actions";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Noto Serif";
  color: #0c1821;
  display: grid;
  grid-auto-flow: row;
`;
const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
`;

class Login extends Component {
  state = {
    userLogin: "",
    pwLogin: "",
    userSignUp: "",
    pwSignUp: "",
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
    localStorage.removeItem("userId");
  };

  render() {
    const { loggedIn, message, showStatus } = this.props.userAuth;
    return (
      <Container>
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
          <SignUpContainer onClick={() => this.setState({ selectSignUp: true })}>
            <h4>Sign up</h4>
            <img src="./expand-button.svg" width="15px" alt="" />
          </SignUpContainer>
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
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  userLifts: state.userLifts,
  userAuth: state.userAuth,
});
export default connect(
  mapStateToProps,
  { userLogin, logOut, createNewUser }
)(Login);
