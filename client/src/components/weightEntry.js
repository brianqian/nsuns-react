import React, { Component } from 'react';
import './weightEntry.css';

export default class weightEntry extends Component {
  state = {
    benchMax: '',
    deadliftMax: '',
    squatMax: '',
    ohpMax: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { children } = this.props;
    const displaySplits = React.Children.map(children, child => {
      let max1 = child.props.t1Base;
      let max2 = child.props.t2Base;
      console.log(max1);
      return React.cloneElement(child, {
        max1: this.state[max1],
        max2: this.state[max2],
      });
    });
    console.log(displaySplits);

    return (
      <div>
        <div className="weight-entry">
          <form action="">
            <label htmlFor="benchInput">Bench: </label>
            <input
              onChange={this.onChange}
              value={this.state.benchMax}
              name="benchMax"
              id="benchInput"
              type="number"
            />
            <label htmlFor="ohpInput">OHP: </label>
            <input
              onChange={this.onChange}
              value={this.state.ohpMax}
              name="ohpMax"
              id="ohpInput"
              type="number"
            />
            <label htmlFor="squatInput">Squat: </label>
            <input
              onChange={this.onChange}
              value={this.state.squatMax}
              name="squatMax"
              id="squatInput"
              type="number"
            />
            <label htmlFor="deadliftInput">Deadlift: </label>
            <input
              onChange={this.onChange}
              value={this.state.deadliftMax}
              name="deadliftMax"
              id="deadliftInput"
              type="number"
            />
            <button type="submit">Save new values</button>
          </form>
        </div>
        <div className="weight-display">{displaySplits}</div>
      </div>
    );
  }
}
