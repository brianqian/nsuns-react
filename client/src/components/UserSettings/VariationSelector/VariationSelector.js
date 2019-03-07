import React from 'react';
import { connect } from 'react-redux';
import { selectVariation } from '../../../actions/';
import styled from 'styled-components';

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > select {
    margin-left: 1rem;
  }
`;
function VariationSelector(props) {
  const handleChange = e => {
    // props.dispatch(selectVariation(e.target.value, props.userAuth.userId));
  };
  return (
    <Selector>
      <p>Variation: </p>
      <select value={props.userSettings.nsunsVariation} onChange={handleChange}>
        <option value="5day">5 day</option>
        <option value="4day">4 day</option>
        <option value="cap3">CAP3</option>
      </select>
    </Selector>
  );
}

const mapStateToProps = state => ({
  userSettings: state.userSettings,
});

export default connect(mapStateToProps)(VariationSelector);
