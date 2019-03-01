import React, { Component } from 'react';
import './AccessoryBox.css';
import { connect } from 'react-redux';
import AccessoryRow from './AccessoryRow/AccessoryRow';

class AccessoryBox extends Component {
  render() {
    const { accessories, userAuth, dayIndex } = this.props;
    const { accessoryPlan } = accessories;
    const accessoryItems = accessories[accessoryPlan][dayIndex].map((accessory, accIndex) => {
      const { title, sets, reps, weight, id } = accessory;
      return (
        <AccessoryRow
          key={dayIndex + accIndex}
          title={title}
          sets={sets}
          reps={reps}
          weight={weight}
          id={id}
          dayIndex={dayIndex}
        />
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
  accessories: state.accessories,
});

export default connect(mapStateToProps)(AccessoryBox);
