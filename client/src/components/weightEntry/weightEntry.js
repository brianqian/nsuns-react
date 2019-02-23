import React, { Component } from 'react';
import './weightEntry.css';
import { connect } from 'react-redux';
import { saveUserLifts, userLiftOnChange } from '../../actions';

class weightEntry extends Component {
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
    this.props.dispatch(userLiftOnChange(name, value));
  };
  // changeWeights = (name, value) => {
  //   value = parseInt(value);
  //   const userInfo = this.state.userInfo;
  //   userInfo[name] = value;
  //   let [swappedName, swappedValue] = swapTmRm(name, value);
  //   userInfo[swappedName] = swappedValue;
  //   this.setState({ userInfo });
  // };
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
    } = this.props.userLifts;
    const userId = this.props.userAuth.userId;
    this.props.dispatch(
      saveUserLifts({
        benchTM,
        deadliftTM,
        squatTM,
        ohpTM,
        benchRM,
        deadliftRM,
        squatRM,
        ohpRM,
        userId,
      })
    );
    //action to save userinfo instead
    // API.saveUserInfo();
    // console.log('USER WEIGHTS', this.state.userLifts);
  };

  render() {
    const { userLifts, userAuth } = this.props;
    return (
      <div>
        <div className="weight-entry">
          <form action="">
            <label className="rm-input-label rm-input" htmlFor="benchRMInput">
              1RM Bench:
            </label>
            <input
              className="rm-input"
              onChange={this.onChange}
              value={userLifts.benchRM}
              name="benchRM"
              id="benchRMInput"
              type="number"
            />
            <label className="rm-input-label rm-input" htmlFor="ohpRMInput">
              1RM OHP:
            </label>
            <input
              className="rm-input"
              onChange={this.onChange}
              value={userLifts.ohpRM}
              name="ohpRM"
              id="ohpRMInput"
              type="number"
            />
            <label className="rm-input-label rm-input" htmlFor="squatRMInput">
              1RM Squat:
            </label>
            <input
              className="rm-input"
              onChange={this.onChange}
              value={userLifts.squatRM}
              name="squatRM"
              id="squatRMInput"
              type="number"
            />
            <label className="rm-input-label rm-input" htmlFor="deadliftRMInput">
              1RM Deadlift:
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={userLifts.deadliftRM}
              name="deadliftRM"
              id="deadliftRMInput"
              type="number"
            />
            <br />

            <label className="tm-input-label tm-input" htmlFor="benchTMInput">
              TM Bench:
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={userLifts.benchTM}
              name="benchTM"
              id="benchTMInput"
              type="number"
            />
            <label className="tm-input-label tm-input" htmlFor="ohpTMInput">
              TM OHP:
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={userLifts.ohpTM}
              name="ohpTM"
              id="ohpTMInput"
              type="number"
            />
            <label className="tm-input-label tm-input" htmlFor="squatTMInput">
              TM Squat:
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={userLifts.squatTM}
              name="squatTM"
              id="squatTMInput"
              type="number"
            />
            <label className="tm-input-label tm-input" htmlFor="deadliftTMInput">
              TM Deadlift:
            </label>
            <input
              className="tm-input"
              onChange={this.onChange}
              value={userLifts.deadliftTM}
              name="deadliftTM"
              id="deadliftTMInput"
              type="number"
            />
            {userAuth.loggedIn && (
              <button onClick={this.handleSubmit} type="submit">
                Save new values
              </button>
            )}
          </form>
        </div>
        {this.props.children}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLifts: state.userLifts,
  userAuth: state.userAuth,
});

export default connect(mapStateToProps)(weightEntry);
