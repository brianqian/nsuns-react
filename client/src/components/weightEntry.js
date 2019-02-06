import React, { Component } from 'react';
import './weightEntry.css';
import API from '../utils/api';
import helper from '../utils/helper';

export default class weightEntry extends Component {
  state = {
    benchRM: '',
    deadliftRM: '',
    squatRM: '',
    ohpRM: '',
    benchTM: '',
    deadliftTM: '',
    squatTM: '',
    ohpTM: '',
    userId: '1',
  };

  onChange = e => {
    let { name, value } = e.target;
    this.props.changeWeights(name, value);
    if (e.target.id.includes('TM')) {
      name = name.split('TM')[0] + 'RM';
      const newWeight = helper.trainMaxToRM(value);
      this.props.changeWeights(name, newWeight);
    } else if (e.target.id.includes('RM')) {
      name = name.split('RM')[0] + 'TM';
      const newWeight = helper.repMaxToTM(value);
      this.props.changeWeights(name, newWeight);
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { benchTM, deadliftTM, squatTM, ohpTM } = this.props.userWeights;
    const userId = this.props.userId;
    const data = { benchTM, deadliftTM, squatTM, ohpTM, userId };
    API.saveMainLifts(data);
    console.log('USER WEIGHTS', this.props.userWeights);
  };

  render() {
    return (
      <div>
        <div className="weight-entry">
          <form action="">
            <label className="rm-input-label rm-input" htmlFor="benchRMInput">
              1RM Bench:{' '}
            </label>
            <input
              className="rm-input"
              onChange={this.onChange}
              value={this.props.userWeights.benchRM}
              name="benchRM"
              id="benchRMInput"
              type="number"
            />
            <label className="rm-input-label rm-input" htmlFor="ohpRMInput">
              1RM OHP:{' '}
            </label>
            <input
              className="rm-input"
              onChange={this.onChange}
              value={this.props.userWeights.ohpRM}
              name="ohpRM"
              id="ohpRMInput"
              type="number"
            />
            <label className="rm-input-label rm-input" htmlFor="squatRMInput">
              1RM Squat:{' '}
            </label>
            <input
              className="rm-input"
              onChange={this.onChange}
              value={this.props.userWeights.squatRM}
              name="squatRM"
              id="squatRMInput"
              type="number"
            />
            <label className="rm-input-label rm-input" htmlFor="deadliftRMInput">
              1RM Deadlift:{' '}
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={this.props.userWeights.deadliftRM}
              name="deadliftRM"
              id="deadliftRMInput"
              type="number"
            />
            <br />

            <label className="tm-input-label tm-input" htmlFor="benchTMInput">
              TM Bench:{' '}
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={this.props.userWeights.benchTM}
              name="benchTM"
              id="benchTMInput"
              type="number"
            />
            <label className="tm-input-label tm-input" htmlFor="ohpTMInput">
              TM OHP:{' '}
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={this.props.userWeights.ohpTM}
              name="ohpTM"
              id="ohpTMInput"
              type="number"
            />
            <label className="tm-input-label tm-input" htmlFor="squatTMInput">
              TM Squat:{' '}
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={this.props.userWeights.squatTM}
              name="squatTM"
              id="squatTMInput"
              type="number"
            />
            <label className="tm-input-label tm-input" htmlFor="deadliftTMInput">
              TM Deadlift:{' '}
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={this.props.userWeights.deadliftTM}
              name="deadliftTM"
              id="deadliftTMInput"
              type="number"
            />
            {this.props.userId ? (
              <button onClick={this.handleSubmit} type="submit">
                Save new values
              </button>
            ) : null}
          </form>
        </div>
        <div className="weight-display">{this.props.children}</div>
      </div>
    );
  }
}
