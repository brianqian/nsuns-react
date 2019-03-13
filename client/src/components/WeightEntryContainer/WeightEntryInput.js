import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
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

function WeightEntryInput({ label, onChange, value, name, className }) {
  return (
    <Wrapper className={className}>
      <label>{label}</label>
      <input onChange={onChange} value={value || ''} name={name} type="number" />
    </Wrapper>
  );
}

export default WeightEntryInput;
