import React, { Component } from 'react';
import './accessoryBox.css';
import uuidv1 from 'uuid';
import { connect } from 'react-redux';
import { addAccessory } from '../../actions';

class accessoryBox extends Component {
  addAccessory = async () => {
    const { dispatch, userAuth, dayIndex, accessoryState, currentPlan } = this.props;
    const { userId } = userAuth;
    console.log('accessoryState:', accessoryState);
    if (!Object.keys(accessoryState).includes('custom')) {
      await this.createCustomPlan(userId, currentPlan);
    }
    dispatch(addAccessory(userId, dayIndex));
  };
  createCustomPlan = (userId, accessoryPlan) => {
    this.props.dispatch();
  };

  render() {
    const { accessories, userAuth } = this.props;
    const accessoryItems = accessories.exercises.map((exercise, index) => {
      return (
        <div key={uuidv1()} className="accessory">
          {userAuth.loggedIn && <button>X</button>}
          <p>
            {exercise.title} {exercise.set} x {exercise.rep} @ {exercise.weight}
          </p>
        </div>
      );
    });

    return (
      <div className="accessory-container">
        {accessoryItems}
        {userAuth.loggedIn && <button onClick={this.addAccessory}>Add Accessory</button>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userAuth: state.userAuth,
  accessoryState: state.accessories,
  currentPlan: state.userLifts.accessoryPlan,
});

export default connect(mapStateToProps)(accessoryBox);
