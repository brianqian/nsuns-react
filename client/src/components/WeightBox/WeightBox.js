import React, { Component } from 'react';
import { calcDailyLift } from '../../utils';
import './WeightBox.css';
import { connect } from 'react-redux';
import WeightBoxTimer from './WeightBoxTimer';

class WeightBox extends Component {
  state = {
    selected: false,
    inTimerMode: false,
  };

  handleClick = () => {
    const timerMode = this.props.userSettings.wbOption === 'timer';
    if (timerMode && !this.state.selected) {
      this.setState({ inTimerMode: true });
    } else {
      this.setState({ selected: this.state.selected ? false : true });
    }
  };

  exitTimerMode = () => {
    this.setState({ inTimerMode: false, selected: true });
  };

  render() {
    const { reps, weights, max, standard } = this.props;
    const { inTimerMode } = this.state;
    const weight = calcDailyLift(weights, max, standard);

    return (
      <div className="workouts">
        {!inTimerMode ? (
          <p onClick={this.handleClick} className={` ${this.state.selected ? 'selected' : ''}`}>
            {reps}x{weight} {standard}
          </p>
        ) : (
          <WeightBoxTimer exitTimerMode={this.exitTimerMode} />
        )}
      </div>
    );

    // <p>{timerVal}</p>
  }
}
const mapStateToProps = state => ({
  userSettings: state.userSettings,
});

export default connect(mapStateToProps)(WeightBox);
