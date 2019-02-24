import React, { Component } from 'react';
import './accessoryBox.css';
import uuidv1 from 'uuid';
import { connect } from 'react-redux';
import { addAccessory } from '../../actions';

class accessoryBox extends Component {
  addAccessory = () => {
    this.props.dispatch(addAccessory());
  };
  render() {
    const { accessories } = this.props;
    const accessoryItems = accessories.exercises.map(exercise => {
      return (
        <div key={uuidv1()} className="accessory">
          <p>
            {exercise.title} {exercise.set} x {exercise.rep} @ {exercise.weight}
          </p>
        </div>
      );
    });

    return (
      <div className="accessory-container">
        {accessoryItems}
        <button onClick={this.addAccessory}>Add Accessory</button>
      </div>
    );
  }
}

export default connect()(accessoryBox);
