import React from 'react';
import { connect } from 'react-redux';
import { selectAccessoryPlan } from '../../../actions/';
import styled from 'styled-components';

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > select {
    margin-left: 1rem;
  }
`;

function AccessorySelector(props) {
  const handleChange = e => {
    props.dispatch(selectAccessoryPlan(e.target.value, props.userAuth.userId));
  };
  const customExists = props.accessories.custom !== undefined;

  return (
    <Selector>
      <p>Accessory: </p>
      <select value={props.accessories.accessoryPlan} onChange={handleChange}>
        <option value="arms">Arms</option>
        <option value="legs">Legs</option>
        {customExists && <option value="custom">Custom</option>}
      </select>
    </Selector>
  );
}

const mapStateToProps = state => ({
  accessories: state.accessories,
  userAuth: state.userAuth,
});

export default connect(mapStateToProps)(AccessorySelector);
