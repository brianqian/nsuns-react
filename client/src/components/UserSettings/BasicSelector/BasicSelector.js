import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > select {
    margin-left: 1rem;
  }
`;

function BasicSelector(props) {
  const { dispatch, userId, options, title, defaultValue, action } = props;
  const handleChange = e => {
    dispatch(action(e.target.value, userId));
  };

  const optionList = options.map(option => (
    <option value={option.value} key={option.value}>
      {option.text}
    </option>
  ));

  return (
    <Selector>
      <p>{title}</p>
      <select value={defaultValue} onChange={handleChange}>
        {optionList}
      </select>
    </Selector>
  );
}

export default connect()(BasicSelector);
