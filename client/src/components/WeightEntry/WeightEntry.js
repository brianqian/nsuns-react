import React, { Component } from 'react';
import './WeightEntry.css';
import { connect } from 'react-redux';
import { userLiftOnChange } from '../../actions';
import { saveUserLifts } from '../../utils/userInfo';

class WeightEntry extends Component {
  onChange = e => {
    const {
      dispatch,
      userLifts: { standard },
    } = this.props;
    const { name, value } = e.target;
    dispatch(userLiftOnChange(name, value, standard));
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      userLifts,
      userAuth: { userId },
    } = this.props;
    saveUserLifts({ ...userLifts, userId });
  };

  render() {
    const { userLifts, userAuth } = this.props;
    return (
      <div>
        <div className="weightEntry__container">
          <form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <div className="weightEntry__input-wrapper weightEntry__bench-input">
              <label htmlFor="benchRMInput">1RM Bench:</label>
              <input
                className="rm-input"
                onChange={this.onChange}
                value={userLifts.benchRM || ''}
                name="benchRM"
                id="benchRMInput"
                type="number"
              />
            </div>
            <div className="weightEntry__input-wrapper weightEntry__ohp-input">
              <label htmlFor="ohpRMInput">1RM OHP:</label>
              <input
                className="rm-input"
                onChange={this.onChange}
                value={userLifts.ohpRM || ''}
                name="ohpRM"
                id="ohpRMInput"
                type="number"
              />
            </div>
            <div className="weightEntry__input-wrapper weightEntry__squat-input">
              <label htmlFor="squatRMInput">1RM Squat:</label>
              <input
                className="rm-input"
                onChange={this.onChange}
                value={userLifts.squatRM || ''}
                name="squatRM"
                id="squatRMInput"
                type="number"
              />
            </div>
            <div className="weightEntry__input-wrapper weightEntry__deadlift-input">
              <label htmlFor="deadliftRMInput">1RM Deadlift:</label>
              <input
                className="tm-input"
                onChange={this.onChange}
                value={userLifts.deadliftRM || ''}
                name="deadliftRM"
                id="deadliftRMInput"
                type="number"
              />
            </div>
            <div className="weightEntry__input-wrapper weightEntry__bench-input">
              <label htmlFor="benchTMInput">TM Bench:</label>
              <input
                className="tm-input"
                onChange={this.onChange}
                value={userLifts.benchTM || ''}
                name="benchTM"
                id="benchTMInput"
                type="number"
              />
            </div>
            <div className="weightEntry__input-wrapper weightEntry__ohp-input">
              <label htmlFor="ohpTMInput">TM OHP:</label>
              <input
                className="tm-input"
                onChange={this.onChange}
                value={userLifts.ohpTM || ''}
                name="ohpTM"
                id="ohpTMInput"
                type="number"
              />
            </div>
            <div className="weightEntry__input-wrapper weightEntry__sqaut-input">
              <label htmlFor="squatTMInput">TM Squat:</label>
              <input
                className="tm-input"
                onChange={this.onChange}
                value={userLifts.squatTM || ''}
                name="squatTM"
                id="squatTMInput"
                type="number"
              />
            </div>
            <div className="weightEntry__input-wrapper weightEntry__deadlift-input">
              <label htmlFor="deadliftTMInput">TM Deadlift:</label>
              <input
                className="tm-input"
                onChange={this.onChange}
                value={userLifts.deadliftTM || ''}
                name="deadliftTM"
                id="deadliftTMInput"
                type="number"
              />
            </div>
            {userAuth.loggedIn && <button type="submit">Save new values</button>}
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLifts: state.userLifts,
  userAuth: state.userAuth,
});

export default connect(mapStateToProps)(WeightEntry);
