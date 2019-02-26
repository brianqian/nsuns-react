import React, { Component } from 'react';
import './App.css';
import LoginSignup from './components/loginSignup/loginSignup';

import MainPage from './views/mainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AccessorySelector from './components/AccessorySelector/AccessorySelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="user-settings">
          <LoginSignup />
          <AccessorySelector customOption={this.props.accessories.custom !== undefined} />
          <button>Close Settings</button>
        </div>
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
const mapStateToProps = state => ({
  accessories: state.accessories,
});
export default connect(mapStateToProps)(App);
