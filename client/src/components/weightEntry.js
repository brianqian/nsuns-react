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

  componentDidMount = async () => {
    if (this.props.userId) {
      const liftMaxs = await API.getMainLifts(this.props.userId);
      const { benchTM, deadliftTM, squatTM, ohpTM } = liftMaxs[0];
      await this.setState({ benchTM, deadliftTM, squatTM, ohpTM });
    } else {
    }
  };

  onChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    if (e.target.id.includes('TM')) {
      name = name.split('TM')[0] + 'RM';
      const newWeight = helper.trainMaxToRM(value);
      this.setState({ [name]: newWeight });
    } else if (e.target.id.includes('RM')) {
      name = name.split('RM')[0] + 'TM';
      const newWeight = helper.repMaxToTM(value);
      this.setState({ [name]: newWeight });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { benchTM, deadliftTM, squatTM, ohpTM } = this.state;
    const userId = this.props.userId;
    const data = { benchTM, deadliftTM, squatTM, ohpTM, userId };
    API.saveMainLifts(data);
  };

  render() {
    const { children } = this.props;
    const displaySplits = React.Children.map(children, child => {
      const max1 = child.props.t1Base + 'TM';
      const max2 = child.props.t2Base + 'TM';
      return React.cloneElement(child, {
        max1: this.state[max1],
        max2: this.state[max2],
      });
    });

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
              value={this.state.benchRM}
              name="benchRM"
              id="benchRMInput"
              type="number"
            />
            <label className="rm-input-label rm-input" hrmlFor="ohpRMInput">
              1RM OHP:{' '}
            </label>
            <input
              className="rm-input"
              onChange={this.onChange}
              value={this.state.ohpRM}
              name="ohpRM"
              id="ohpRMInput"
              type="number"
            />
            <label className="rm-input-label rm-input" hrmlFor="squatRMInput">
              1RM Squat:{' '}
            </label>
            <input
              className="rm-input"
              onChange={this.onChange}
              value={this.state.squatRM}
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
              value={this.state.deadliftRM}
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
              value={this.state.benchTM}
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
              value={this.state.ohpTM}
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
              value={this.state.squatTM}
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
              value={this.state.deadliftTM}
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
        <div className="weight-display">{displaySplits}</div>
      </div>
    );
  }
}
