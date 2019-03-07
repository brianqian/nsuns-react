import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLiftOnChange } from '../../actions';
import { saveUserLifts } from '../../utils/userInfo';
import WeightEntryInput from './WeightEntryInput';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100vw;
`;
const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.25rem 2rem;
  justify-content: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.25rem 1rem;
  }
`;
const Button = styled.button`
  grid-column: 4;
  @media (max-width: 800px) {
    grid-column: 2;
  }
`;
class WeightEntry extends Component {
  onChange = e => {
    const {
      dispatch,
      userLifts: { standard },
    } = this.props;
    const { name, value } = e.target;
    dispatch(userLiftOnChange(name, value, standard));
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      userLifts,
      userAuth: { userId },
    } = this.props;
    saveUserLifts({ ...userLifts, userId });
  };

  render() {
    const { userLifts, userAuth } = this.props;
    return (
      <div>
        <Container>
          <FormContainer
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <WeightEntryInput
              label="1RM Bench"
              onChange={this.onChange}
              value={userLifts.benchRM || ''}
              name="benchRM"
            />
            <WeightEntryInput
              label="1RM OHP"
              onChange={this.onChange}
              value={userLifts.ohpRM || ''}
              name="ohpRM"
            />
            <WeightEntryInput
              label="1RM Squat"
              onChange={this.onChange}
              value={userLifts.squatRM || ''}
              name="squatRM"
            />
            <WeightEntryInput
              label="1RM Deadlift"
              onChange={this.onChange}
              value={userLifts.deadliftRM || ''}
              name="deadliftRM"
            />
            <WeightEntryInput
              label="TM Bench"
              onChange={this.onChange}
              value={userLifts.benchTM || ''}
              name="benchTM"
            />
            <WeightEntryInput
              label="TM OHP"
              onChange={this.onChange}
              value={userLifts.ohpTM || ''}
              name="ohpTM"
            />
            <WeightEntryInput
              label="TM Squat"
              onChange={this.onChange}
              value={userLifts.squatTM || ''}
              name="squatTM"
            />
            <WeightEntryInput
              label="TM Deadlift"
              onChange={this.onChange}
              value={userLifts.deadliftTM || ''}
              name="deadliftTM"
            />
            {userAuth.loggedIn && <Button type="submit">Save new values</Button>}
          </FormContainer>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLifts: state.userLifts,
  userAuth: state.userAuth,
});

export default connect(mapStateToProps)(WeightEntry);
