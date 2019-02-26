import React, { Component } from 'react';
import { calcDailyLift } from '../../utils/helper';
import './weightBox.css';

export default class weightBox extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState({ selected: this.state.selected ? false : true });
  };

  render() {
    const { reps, weights, max, standard } = this.props;
    const weight = calcDailyLift(weights, max);
    return (
      <p onClick={this.handleClick} className={`workouts ${this.state.selected ? 'selected' : ''}`}>
        {reps}x{weight} {standard}
      </p>
    );
  }
}
