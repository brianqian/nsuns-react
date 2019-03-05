import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './views/mainPage';

const ReduxContainer = () => (
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" component={MainPage} />
      </App>
    </Router>
  </Provider>
);

ReactDOM.render(<ReduxContainer />, document.getElementById('root'));
