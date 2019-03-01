import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccessoryButtons from '../AccessoryButtons/AccessoryButtons';
import {
  addAccessory,
  createAccessoryPlan,
  editAccessory,
  deleteAccessory,
} from '../../../actions';

class AccessoryRow extends Component {
  state = {
    id: 0,
    title: '',
    sets: 0,
    reps: 0,
    weight: 0,
    currentlyEditing: false,
    loaded: false,
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

  componentDidMount = async () => {
    console.log(this.props.id);
    if (!this.props.id) await this.setState({ currentlyEditing: true });
    this.setState({ loaded: true });
    console.log(this.state);
  };

  crudAccessory = async type => {
    const { dispatch, userAuth, accessories, id, dayIndex } = this.props;
    const { userId } = userAuth;
    const { accessoryPlan } = accessories;
    if (!this.props.id) type = 'ADD';
    if (!accessories.hasOwnProperty('custom'))
      await dispatch(createAccessoryPlan(userId, accessories[accessoryPlan]));

    switch (type) {
      case 'DELETE':
        this.deleteAcc({ id, dayIndex });
        break;
      case 'EDIT':
        this.editAcc();
      case 'ADD':
        const { title, sets, reps, weight } = this.state;
        this.addAcc({ title, sets, reps, weight, userId, dayIndex });
        break;

      default:
        console.log('errror');
    }
  };
  addAcc = payload => {
    console.log('inAddAcc');
    this.props.dispatch(addAccessory(payload));
  };

  deleteAcc = payload => {
    this.props.dispatch(deleteAccessory(payload));
  };
  editAcc = async () => {
    const { dispatch, userAuth, dayIndex, title, sets, reps, weight, id } = this.props;
    const { userId } = userAuth;
    if (this.state.currentlyEditing) {
      const { title, sets, reps, weight, id } = this.state;
      await dispatch(editAccessory({ title, sets, reps, weight, id, userId, dayIndex }));
      this.setState({ currentlyEditing: false, id: null });
    } else {
      this.setState({ currentlyEditing: true, id, title, sets, reps, weight });
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { userAuth, title, sets, reps, weight } = this.props;
    return (
      <div className="accessory__item">
        {userAuth.loggedIn && this.state.loaded && (
          <AccessoryButtons crudFunc={this.crudAccessory} clicked={this.state.currentlyEditing} />
        )}

        {this.state.currentlyEditing ? (
          <div className="accessory__item-content">
            <input onChange={this.onChange} type="text" name={'title'} value={this.state.title} />
            <div className="accessory__item-content-setrep">
              <input onChange={this.onChange} type="number" name={'sets'} value={this.state.sets} />
              <input onChange={this.onChange} type="number" name={'reps'} value={this.state.reps} />
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
            <span>{title}</span>
            <span>
              {sets} x {reps}
            </span>
            <span>{weight}</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessories: state.accessories,
  userAuth: state.userAuth,
});

export default connect(mapStateToProps)(AccessoryRow);
