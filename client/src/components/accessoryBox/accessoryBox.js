import React, { Component } from 'react';
import AccessoryContent from './accessoryContent/accessoryContent';
import './accessoryBox.css';

export default class accessoryBox extends Component {
  render() {
    //component is called in dailyLifts
    console.log(this.props);
    //TODO map over accessory information and generate accessoryContent
    const accessoryContent = this.props;
    return (
      <div className="accessory-container">
        <p>Accessories</p>
        <AccessoryContent />
      </div>
    );
  }
}
