import React, { Component } from 'react';
import './AccessoryBox.css';
import uuidv1 from 'uuid';
import { connect } from 'react-redux';
import { addAccessory, createAccessoryPlan } from '../../actions';

class AccessoryBox extends Component {
  addAccessory = async () => {
    const { dispatch, userAuth, dayIndex, accessoryState } = this.props;
    const { userId } = userAuth;
    console.log('accessoryState:', accessoryState);
    if (!Object.keys(accessoryState).includes('custom')) {
      console.log('1st. creating plan');
      dispatch(createAccessoryPlan(userId, accessoryState.accessoryPlan));
    }
    // addAccessory(userId, dayIndex);
  };

  render() {
    const { accessories, userAuth } = this.props;
    console.log('accessories', accessories);
    const accessoryItems = accessories.map((exercise, index) => {
      return (
        <div key={uuidv1()} className="accessory">
          {userAuth.loggedIn && <button>X</button>}
          <p>
            {exercise.title} {exercise.sets} x {exercise.reps} @ {exercise.weight}
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
  accPlan: state.userLifts.accessoryPlan,
});

export default connect(mapStateToProps)(AccessoryBox);
