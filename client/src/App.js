import React, { Component } from 'react';
import './App.css';
import LoginSignup from './components/loginSignup/loginSignup';
import MainPage from './views/mainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <LoginSignup />
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
