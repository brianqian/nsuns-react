import React, { Component } from 'react';

class WeightEntryInput extends Component {
  render() {
    return (
      <div className="weightEntry__input-wrapper weightEntry__bench-input" id="benchRMInput">
        <label htmlFor="benchRMInput">1RM Bench:</label>
        <input
          className="rm-input"
          onChange={this.onChange}
          value={userLifts.benchRM || ''}
          name="benchRM"
          type="number"
        />
      </div>
    );
  }
}

export default WeightEntryInput;
