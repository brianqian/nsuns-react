import React from 'react';
import { connect } from 'react-redux';
import { selectStandard } from '../../../actions/';
import './StandardSelector.css';

function StandardSelector(props) {
  const handleChange = e => {
    props.dispatch(selectStandard(e.target.value));
  };
  return (
    <div className="standard-selector">
      <p>Standard: </p>
      <select value={props.dailySplits.standard} onChange={handleChange}>
        <option value="lbs">Lbs</option>
        <option value="kg">Kg</option>
      </select>
    </div>
  );
}

const mapStateToProps = state => ({
  dailySplits: state.dailySplits,
});

export default connect(mapStateToProps)(StandardSelector);
