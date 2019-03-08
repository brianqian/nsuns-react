import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 0 1rem;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
  }
  > p {
    @media (max-width: 800px) {
      grid-column: span 2;
      text-align: center;
    }
  }
`;

class Cap3Calculator extends Component {
  state = {
    weightVal: 0,
    repVal: 0,
    result: 0,
  };
  onChange = async e => {
    const { name, value } = e.target;
    await this.setState({ [name]: value });
    const { weightVal, repVal } = this.state;
    const result = Math.floor(weightVal * (0.0333 * repVal + 1));
    this.setState({ result });
  };

  render() {
    const { weightVal, repVal, result } = this.state;
    return (
      <Container className={this.props.className}>
        <div>
          <label htmlFor="">Weight</label>
          <input onChange={this.onChange} name="weightVal" value={weightVal} type="number" />
        </div>
        <div>
          <label htmlFor="">Reps</label>
          <input onChange={this.onChange} name="repVal" value={repVal} type="number" />
        </div>

        <p>
          New Estimated Max: <span>{result}</span>
        </p>
      </Container>
    );
  }
}

export default Cap3Calculator;
