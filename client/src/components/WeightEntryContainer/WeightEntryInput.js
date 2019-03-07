import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 800px) {
    grid-row: ${props => props.gridRow};
  }
  > label {
    @media (max-width: 800px) {
      flex: 2;
    }
  }
  > input {
    @media (max-width: 800px) {
      flex: 1;
    }
  }
`;

function WeightEntryInput(props) {
  return (
    <Wrapper>
      <label>{props.label}</label>
      <input onChange={props.onChange} value={props.value || ''} name={props.name} type="number" />
    </Wrapper>
  );
}

export default WeightEntryInput;
