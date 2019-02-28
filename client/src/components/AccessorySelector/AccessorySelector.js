import React from 'react';
import { connect } from 'react-redux';
import './AccessorySelector.css';
import { selectAccessoryPlan } from '../../actions/';

function AccessorySelector(props) {
  const handleChange = e => {
    props.dispatch(selectAccessoryPlan(e.target.value));
  };
  return (
    <div className="accessory-selector">
      <p>Accessory: </p>
      <select value={props.accessories.accessoryPlan} onChange={handleChange}>
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

const mapStateToProps = state => ({
  accessories: state.accessories,
});

export default connect(mapStateToProps)(AccessorySelector);
