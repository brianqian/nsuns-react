import React from 'react';
import { connect } from 'react-redux';
import { selectVariation } from '../../../actions/';
import './VariationSelector.css';

function VariationSelector(props) {
  const handleChange = e => {
    // props.dispatch(selectVariation(e.target.value, props.userAuth.userId));
  };
  return (
    <div className="variation-selector">
      <p>Variation: </p>
      <select value={props.userSettings.nsunsVariation} onChange={handleChange}>
        <option value="5day">5 day</option>
        <option value="4day">4 day</option>
        <option value="cap3">CAP3</option>
      </select>
    </div>
  );
}

const mapStateToProps = state => ({
  userSettings: state.userSettings,
});

export default connect(mapStateToProps)(VariationSelector);
