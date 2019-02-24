import React, { Component } from 'react';
import './accessoryBox.css';
import uuidv1 from 'uuid';
import { connect } from 'react-redux';

class accessoryBox extends Component {
  render() {
    console.log(this.props);
    const { index, accessories } = this.props;
    const { accessoryPlan } = this.props.userLifts;
    const accessoryItems = accessories[accessoryPlan][index].exercises.map(exercise => {
      return (
        <div key={uuidv1()} className="accessory">
          <p>
            {exercise.title} {exercise.set} x {exercise.rep} @ {exercise.weight}
          </p>
        </div>
      );
    });

    return <div className="accessory-container">{accessoryItems}</div>;
  }
}
const mapStateToProps = state => ({
  accessories: state.accessories,
  userLifts: state.userLifts,
});

export default connect(mapStateToProps)(accessoryBox);
