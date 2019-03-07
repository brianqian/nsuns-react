import React from 'react';
import { connect } from 'react-redux';
import { selectStandard } from '../../../actions/';
import styled from 'styled-components';

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > select {
    margin-left: 1rem;
  }
`;

function StandardSelector(props) {
  const handleChange = e => {
    props.dispatch(selectStandard(e.target.value, props.userAuth.userId));
  };
  return (
    <Selector>
      <p>Standard: </p>
      <select value={props.userSettings.standard} onChange={handleChange}>
        <option value="lbs">Lbs</option>
        <option value="kg">Kg</option>
      </select>
    </Selector>
  );
}

const mapStateToProps = state => ({
  userSettings: state.userSettings,
  userAuth: state.userAuth,
});

export default connect(mapStateToProps)(StandardSelector);
