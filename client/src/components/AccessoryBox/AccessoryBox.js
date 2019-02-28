import React, { Component } from 'react';
import './AccessoryBox.css';
import { connect } from 'react-redux';
import { addAccessory, createAccessoryPlan, editAccessory, deleteAccessory } from '../../actions';

class AccessoryBox extends Component {
  state = {
    accIndex: null,
    dayIndex: null,
    title: '',
    sets: 0,
    reps: 0,
    weight: 0,
    currentlyEditing: false,
  };
  // addAccessory = async () => {
  //   const { dispatch, userAuth, dayIndex, accessoryState } = this.props;
  //   const { userId } = userAuth;
  //   const { accessoryPlan } = accessoryState;
  //   console.log('accessoryState:', accessoryState, accessoryPlan, accessoryState[accessoryPlan]);

  //   if (!Object.keys(accessoryState).includes('custom')) {
  //     dispatch(createAccessoryPlan(userId, accessoryState[accessoryPlan]));
  //   }
  //   addAccessory(userId, dayIndex);
  // };
  componentWillUnmount = () => {
    console.log('accbox unmounting');
  };

  crudAcc = async (payload, type) => {
    const { dispatch, userAuth, dayIndex, accessoryState } = this.props;
    const { userId } = userAuth;
    const { accessoryPlan } = accessoryState;
    if (!accessoryState.custom) {
      console.log(accessoryState);
      await dispatch(createAccessoryPlan(userId, accessoryState[accessoryPlan]));
    }
    payload.userId = userId;
    payload.dayIndex = dayIndex;
    switch (type) {
      case 'DELETE':
        this.deleteAcc(payload);
        break;
      case 'EDIT':
        this.editAcc(payload);
        break;
      default:
        console.log('errror');
    }
  };

  deleteAcc = (dayIndex, accIndex) => {
    console.log('in delete acc', dayIndex, accIndex);
  };
  editAcc = async payload => {
    console.log('editAcc', payload);
    const { currentlyEditing } = this.state;
    if (currentlyEditing) {
      await this.setState({ currentlyEditing: false });
      await this.setState({ accIndex: null });
      const { title, sets, reps, weight } = this.state;
      const accessoryObject = { ...payload, title, sets, reps, weight };
      await this.props.dispatch(editAccessory(accessoryObject));
    } else {
      const { title, sets, reps, weight, dayIndex, accIndex } = payload;
      await this.setState({ currentlyEditing: true });
      this.setState({ dayIndex, accIndex, title, sets, reps, weight });
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { accessories, userAuth, dayIndex } = this.props;
    const accessoryItems = accessories.map((exercise, accIndex) => {
      const { title, sets, reps, weight } = exercise;
      return (
        <div key={dayIndex + accIndex} className="accessory__item">
          {userAuth.loggedIn && (
            <div className="accessory__item-icons">
              <button onClick={() => this.crudAcc({ accIndex }, 'DELETE')}>X</button>
              <img
                onClick={() =>
                  this.crudAcc({ dayIndex, accIndex, title, sets, reps, weight }, 'EDIT')
                }
                src={
                  this.state.accIndex === accIndex ? './save_icon.svg' : './pencil-edit-button.svg'
                }
              />
            </div>
          )}
          {this.state.accIndex === accIndex ? (
            <div className="accessory__item-content">
              <input onChange={this.onChange} type="text" name={'title'} value={this.state.title} />
              <div className="accessory__item-content-setrep">
                <input
                  onChange={this.onChange}
                  type="number"
                  name={'sets'}
                  value={this.state.sets}
                />
                <input
                  onChange={this.onChange}
                  type="number"
                  name={'reps'}
                  value={this.state.reps}
                />
              </div>
              <input
                onChange={this.onChange}
                type="number"
                name={'weight'}
                value={this.state.weight}
              />
            </div>
          ) : (
            <div className="accessory__item-content">
              <span>{exercise.title}</span>
              <span>
                {exercise.sets} x {exercise.reps}
              </span>
              <span>{exercise.weight}</span>
            </div>
          )}
        </div>
      );
    });

    return (
      <div className="accessory__container">
        <div className="accessory__container-titles">
          <h4 />
          <h4>Title</h4>
          <h4>SetsxReps</h4>
          <h4>Weight(lbs)</h4>
        </div>
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
