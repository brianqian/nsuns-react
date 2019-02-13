import React, { Component } from 'react';
import './weightEntry.css';
import API from '../../utils/api';

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
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      benchTM,
      deadliftTM,
      squatTM,
      ohpTM,
      benchRM,
      deadliftRM,
      squatRM,
      ohpRM,
    } = this.props.userInfo;
    const userId = this.props.userInfo.id;
    const data = {
      benchTM,
      deadliftTM,
      squatTM,
      ohpTM,
      benchRM,
      deadliftRM,
      squatRM,
      ohpRM,
      userId,
    };
    API.saveUserInfo(data);
    console.log('USER WEIGHTS', this.props.userInfo);
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
              value={this.props.userInfo.benchRM}
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
              value={this.props.userInfo.ohpRM}
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
              value={this.props.userInfo.squatRM}
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
              value={this.props.userInfo.deadliftRM}
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
              value={this.props.userInfo.benchTM}
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
              value={this.props.userInfo.ohpTM}
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
              value={this.props.userInfo.squatTM}
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
              value={this.props.userInfo.deadliftTM}
              name="deadliftTM"
              id="deadliftTMInput"
              type="number"
            />
            {this.props.userInfo.id && (
              <button onClick={this.handleSubmit} type="submit">
                Save new values
              </button>
            )}
          </form>
        </div>
        <div className="weight-display">{this.props.children}</div>
      </div>
    );
  }
}
