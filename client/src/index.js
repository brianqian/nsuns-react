import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './store';
import * as actionCreators from './actions/actionCreators';

const mapStateToProps = state => ({
  accessories: state.accessories,
  dailySplits: state.dailySplits,
  userLifts: state.userLifts,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const ReduxContainer = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(<ReduxContainer />, document.getElementById('root'));
