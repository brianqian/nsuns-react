import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeightBoxOption, setTimerOption } from '../../../actions/';
import './WeightBoxSelector.css';

class WeightBoxSelector extends Component {
  handleSelectorChange = e => {
    const { userId } = this.props.userAuth;
    this.props.dispatch(setWeightBoxOption(e.target.value, userId));
  };
  handleTimerChange = e => {
    const { userId } = this.props.userAuth;
    this.props.dispatch(setTimerOption(e.target.value, userId));
  };
  render() {
    const { userSettings } = this.props;
    return (
      <div className="weightboxSelector__container">
        <div className="weightbox-selector">
          <p>Click effect: </p>
          <select value={userSettings.wbOption} onChange={this.handleSelectorChange}>
            <option value="mark">Mark (only)</option>
            <option value="timer">Timer</option>
          </select>
        </div>
        {userSettings.wbOption === 'timer' && (
          <div className="timer-selector">
            <p>Rest Time: </p>
            <select value={userSettings.timerOption} onChange={this.handleTimerChange}>
              <option value="30">0:30</option>
              <option value="60">1:00</option>
              <option value="90">1:30</option>
              <option value="120">2:00</option>
            </select>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userSettings: state.userSettings,
  userAuth: state.userAuth,
});

export default connect(mapStateToProps)(WeightBoxSelector);
