import React, { Component } from 'react';
import './accessoryBox.css';

export default class accessoryBox extends Component {
  render() {
    //component is called in dailyLifts; in app.js, pass in the daily accessory to dailyLift

    const accessories = this.props.accessories.exercises.map(exercise => {
      return (
        <div className="accessory">
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
