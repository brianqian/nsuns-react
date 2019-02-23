import React, { Component } from 'react';
import './accessoryBox.css';
import uuidv1 from 'uuid';

export default class accessoryBox extends Component {
  render() {
    const accessories = this.props.accessories.exercises.map(exercise => {
      return (
        <div key={uuidv1()} className="accessory">
          {this.props.showAccessories && (
            <p>
              {exercise.title} {exercise.set} x {exercise.rep} @ {exercise.weight}
            </p>
          )}
        </div>
      );
    });

    return <div className="accessory-container">{accessories}</div>;
  }
}
