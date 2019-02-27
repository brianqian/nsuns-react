import React, { Component } from 'react';
import './AccessoryBox.css';
import { connect } from 'react-redux';
import { addAccessory, createAccessoryPlan } from '../../actions';

class AccessoryBox extends Component {
  state = {
    accIndex: null,
    dayIndex: null,
    title: '',
    sets: null,
    reps: null,
  };
  addAccessory = async () => {
    const { dispatch, userAuth, dayIndex, accessoryState } = this.props;
    const { userId } = userAuth;
    const { accessoryPlan } = accessoryState;
    console.log('accessoryState:', accessoryState, accessoryPlan, accessoryState[accessoryPlan]);

    //TODO: this logic needs to be handled by the server
    if (!Object.keys(accessoryState).includes('custom')) {
      console.log('1st. creating plan');
      dispatch(createAccessoryPlan(userId, accessoryState[accessoryPlan]));
    }
    // addAccessory(userId, dayIndex);
  };

  deleteAcc = (dayIndex, accIndex) => {
    console.log(dayIndex, accIndex);
  };
  editAcc = (dayIndex, accIndex, title, sets, reps) => {
    console.log(dayIndex, accIndex);
    this.setState({ dayIndex, accIndex, title, sets, reps });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { accessories, userAuth, dayIndex } = this.props;
    console.log('accessories', accessories);
    const accessoryItems = accessories.map((exercise, accIndex) => {
      const { title, sets, reps } = exercise;
      return (
        <div key={dayIndex + accIndex} className="accessory__item">
          {userAuth.loggedIn && (
            <div className="accessory__item-icons">
              <button onClick={() => this.deleteAcc(dayIndex, accIndex)}>X</button>
              <img
                onClick={() => this.editAcc(dayIndex, accIndex, title, sets, reps)}
                src="./pencil-edit-button.svg"
              />
            </div>
          )}
          {this.state.accIndex === accIndex ? (
            <div>
              <input onChange={this.onChange} type="text" name={'title'} value={this.state.title} />
              <input onChange={this.onChange} type="text" name={'sets'} value={this.state.sets} />
              <input onChange={this.onChange} type="text" name={'reps'} value={this.state.reps} />
              lbs
            </div>
          ) : (
            <div>
              <span>{exercise.title}</span>
              <span>
                {exercise.sets} x {exercise.reps}
              </span>
              <span>{exercise.weight} lbs</span>
            </div>
          )}
        </div>
      );
    });

    return (
      <div className="accessory__container">
        <h4>x</h4>
        <h4>Title</h4>
        <h4>SetsxReps</h4>
        <h4>Weight(lbs)</h4>
        {accessoryItems}
        {userAuth.loggedIn && <button onClick={this.addAccessory}>Add Accessory</button>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userAuth: state.userAuth,
  accessoryState: state.accessories,
});

export default connect(mapStateToProps)(AccessoryBox);
