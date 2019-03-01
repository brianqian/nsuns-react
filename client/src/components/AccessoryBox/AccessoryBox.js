import React, { Component } from 'react';
import './AccessoryBox.css';
import { connect } from 'react-redux';
import { addAccessory, createAccessoryPlan, editAccessory, deleteAccessory } from '../../actions';

class AccessoryBox extends Component {
  state = {
    id: 0,
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
    console.log('accbox unmounting', this.state);
  };

  crudAcc = async (payload, type) => {
    const { dispatch, userAuth, dayIndex, accessoryState } = this.props;
    const { userId } = userAuth;
    const { accessoryPlan } = accessoryState;
    await dispatch(createAccessoryPlan(userId, accessoryState[accessoryPlan]));

    payload.userId = userId;
    payload.dayIndex = dayIndex;
    console.log('before switch', payload);
    switch (type) {
      case 'DELETE':
        await this.deleteAcc(payload);
        break;
      case 'EDIT':
        await this.editAcc(payload);
        break;
      default:
        console.log('errror');
    }
  };

  deleteAcc = payload => {
    this.props.dispatch(deleteAccessory(payload));
  };
  editAcc = async payload => {
    this.setState({ id: payload.id });
    console.log('editACc hit', payload.id);
    const { currentlyEditing } = this.state;
    if (currentlyEditing && this.state.id === payload.id) {
      const { title, sets, reps, weight, id } = this.state;
      const accessoryObject = { ...payload, title, sets, reps, weight, id };
      await this.props.dispatch(editAccessory(accessoryObject));
      this.setState({ currentlyEditing: false, id: null });
    } else {
      const { title, sets, reps, weight, id } = payload;
      this.setState({ currentlyEditing: true, id, title, sets, reps, weight });
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { accessories, userAuth, dayIndex } = this.props;
    const accessoryItems = accessories.map((accessory, accIndex) => {
      const { title, sets, reps, weight, id } = accessory;
      return (
        <div key={dayIndex + accIndex} className="accessory__item">
          {userAuth.loggedIn && (
            <div className="accessory__item-icons">
              <button onClick={() => this.crudAcc({ id }, 'DELETE')}>X</button>
              <img
                onClick={() =>
                  this.crudAcc({ dayIndex, accIndex, title, sets, reps, weight, id }, 'EDIT')
                }
                src={this.state.id === id ? './save_icon.svg' : './pencil-edit-button.svg'}
              />
            </div>
          )}
          {this.state.id === id ? (
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
              <span>{accessory.title}</span>
              <span>
                {accessory.sets} x {accessory.reps}
              </span>
              <span>{accessory.weight}</span>
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
