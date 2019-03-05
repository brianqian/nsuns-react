import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeightBoxOption, setTimerOption } from '../../../actions/';
import './WeightBoxSelector.css';

class WeightBoxSelector extends Component {
  state = {
    timerSelected: false,
  };
  handleSelectorChange = e => {
    this.setState({ timeSelected: this.state.timerSelected ? false : true });
    this.props.dispatch(setWeightBoxOption(e.target.value));
  };
  handleTimerChange = e => {
    console.log(e);
    this.props.dispatch(setTimerOption(e.target.value));
  };
  render() {
    const { dailySplits } = this.props;
    return (
      <div className="standardSelector__container">
        <div className="standard-selector">
          <p>Weight Box click effect: </p>
          <select value={dailySplits.wbOption} onChange={this.handleSelectorChange}>
            <option value="mark">Mark (only)</option>
            <option value="timer">Timer</option>
          </select>
        </div>
        {this.state.timerSelected && (
          <div className="timer-selector">
            <p>Rest Time: </p>
            <select value={dailySplits.timerOption} onChange={this.handleTimerChange}>
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
  dailySplits: state.dailySplits,
});

export default connect(mapStateToProps)(WeightBoxSelector);
