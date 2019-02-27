import React from 'react';
import { connect } from 'react-redux';
import './AccessorySelector.css';
import { changeAccessoryPlan } from '../../actions/';

function AccessorySelector(props) {
  const handleChange = e => {
    props.dispatch(changeAccessoryPlan(e.target.value));
  };
  return (
    <div className="accessory-selector">
      <p>Accessory: </p>
      <select value={props.customOption && 'custom'} onChange={handleChange}>
        <option value="arms">Arms</option>
        <option value="legs">Legs</option>
        {props.customOption && <option value="custom">Custom</option>}
        {/* <option autofocus value="custom">
          Custom
        </option> */}
      </select>
    </div>
  );
}

export default connect()(AccessorySelector);
