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
      <select onChange={handleChange}>
        <option value="arms">Arms</option>
        {props.customOption && (
          <option selected value="custom">
            Custom
          </option>
        )}
        {/* <option autofocus value="custom">
          Custom
        </option> */}
      </select>
    </div>
  );
}

export default connect()(AccessorySelector);
