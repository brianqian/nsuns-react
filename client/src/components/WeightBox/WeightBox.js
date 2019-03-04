import React, { Component } from 'react';
import { calcDailyLift } from '../../utils';
import './WeightBox.css';

class WeightBox extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState({ selected: this.state.selected ? false : true });
  };

  render() {
    const { reps, weights, max, standard } = this.props;
    const weight = calcDailyLift(weights, max, standard);
    return (
      <p onClick={this.handleClick} className={`workouts ${this.state.selected ? 'selected' : ''}`}>
        {reps}x{weight} {standard}
      </p>
    );
  }
}

export default WeightBox;
