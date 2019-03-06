import React, { Component } from 'react';
import './WeightBoxTimer.css';
import { connect } from 'react-redux';

class WeightBoxTimer extends Component {
  state = {
    timerVal: 0,
    loaded: false,
    displaySec: 0,
    displayMin: 0,
  };

  componentDidMount = async () => {
    const { timerOption } = this.props.userSettings;
    await this.setState({ timerVal: timerOption });
    await this.setState({ loaded: true });
    this.calculateMinutes(timerOption);
    this.timer = await setInterval(() => this.countdown(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  calculateMinutes = seconds => {
    let displaySec = seconds % 60;
    const formattedSec = '0' + displaySec;
    if (formattedSec.length === 2) displaySec = formattedSec;
    const displayMin = Math.floor(seconds / 60);
    this.setState({ displaySec, displayMin });
  };

  countdown = () => {
    const { timerVal } = this.state;
    let newVal = timerVal - 1;
    this.calculateMinutes(newVal);
    timerVal > 0 ? this.setState({ timerVal: newVal }) : this.props.exitTimerMode();
  };

  render() {
    const { displayMin, displaySec } = this.state;
    return (
      <p className="timer" onClick={() => this.props.exitTimerMode()}>
        {this.state.loaded && `${displayMin}:${displaySec}`}
      </p>
    );
  }
}

const mapStateToProps = state => ({
  userSettings: state.userSettings,
});

export default connect(mapStateToProps)(WeightBoxTimer);
