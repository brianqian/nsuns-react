import React, { Component } from 'react';

export default class login extends Component {
  state = {
    username: '',
    password: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  logIn = e => {
    e.preventDefault();
    console.log(this.state.username, this.state.password);
  };
  render() {
    return (
      <div className="login-container">
        <form action="">
          <label htmlFor="username">Username: </label>
          <input
            onChange={this.onChange}
            name="username"
            id="username"
            type="text"
            value={this.state.username}
          />
          <label htmlFor="password">Password: </label>
          <input
            onChange={this.onChange}
            name="password"
            id="password"
            type="password"
            value={this.state.password}
          />
          <button onClick={this.logIn} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
