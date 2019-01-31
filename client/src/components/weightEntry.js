import React, { Component } from 'react';
import './weightEntry.css';
import API from '../utils/api';

export default class weightEntry extends Component {
  state = {
    benchMax: '',
    deadliftMax: '',
    squatMax: '',
    ohpMax: '',
    userId: '1',
  };

  componentDidMount = async () => {
    const stateObj = await API.getMainLifts(this.state.userId);
    const { benchRM, deadliftRM, squatRM, ohpRM } = stateObj[0];
    await this.setState({
      benchMax: benchRM,
      deadliftMax: deadliftRM,
      squatMax: squatRM,
      ohpMax: ohpRM,
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { benchMax, deadliftMax, squatMax, ohpMax } = this.state;
    const userId = this.props.userId;
    const data = { benchMax, deadliftMax, squatMax, ohpMax, userId };
    API.saveMainLifts(data);
  };

  render() {
    const { children } = this.props;
    const displaySplits = React.Children.map(children, child => {
      const max1 = child.props.t1Base;
      const max2 = child.props.t2Base;
      return React.cloneElement(child, {
        max1: this.state[max1],
        max2: this.state[max2],
      });
    });

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
            <button onClick={this.handleSubmit} type="submit">
              Save new values
            </button>
          </form>
        </div>
        <div className="weight-display">{displaySplits}</div>
      </div>
    );
  }
}
