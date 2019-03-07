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
  grid-template-columns: ${props => (props.cap3 ? 'repeat(5, 1fr);' : 'repeat(4, 1fr);')}
  grid-gap: 0.25rem 1rem;
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

const StyledWeightInput = styled(WeightEntryInput)`
  @media (max-width: 800px) {
    grid-row: ${props => props.gridRow};
    grid-column: ${props => (props.label[0] === 'T' ? '2;' : '1;')};
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
    const { userLifts, userAuth, userSettings } = this.props;
    const isCap3 = userSettings.variation === 'cap3';
    console.log(isCap3);
    return (
      <div>
        <Container>
          <FormContainer
            cap3={isCap3}
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <StyledWeightInput
              label="1RM Bench"
              onChange={this.onChange}
              value={userLifts.benchRM || ''}
              name="benchRM"
            />
            <StyledWeightInput
              label="1RM OHP"
              onChange={this.onChange}
              value={userLifts.ohpRM || ''}
              name="ohpRM"
            />
            <StyledWeightInput
              label="1RM Squat"
              onChange={this.onChange}
              value={userLifts.squatRM || ''}
              name="squatRM"
            />
            <StyledWeightInput
              label="1RM Deadlift"
              onChange={this.onChange}
              value={userLifts.deadliftRM || ''}
              name="deadliftRM"
            />
            {isCap3 && (
              <StyledWeightInput
                label="1RM Row"
                onChange={this.onChange}
                value={userLifts.rowRM || ''}
                name="rowRM"
              />
            )}
            <StyledWeightInput
              gridRow="1"
              label="TM Bench"
              onChange={this.onChange}
              value={userLifts.benchTM || ''}
              name="benchTM"
            />
            <StyledWeightInput
              gridRow="2"
              label="TM OHP"
              onChange={this.onChange}
              value={userLifts.ohpTM || ''}
              name="ohpTM"
            />
            <StyledWeightInput
              gridRow="3"
              label="TM Squat"
              onChange={this.onChange}
              value={userLifts.squatTM || ''}
              name="squatTM"
            />
            <StyledWeightInput
              gridRow="4"
              label="TM Deadlift"
              onChange={this.onChange}
              value={userLifts.deadliftTM || ''}
              name="deadliftTM"
            />
            {isCap3 && (
              <StyledWeightInput
                label="TM Row"
                onChange={this.onChange}
                value={userLifts.rowTM || ''}
                name="rowTM"
              />
            )}

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
  userSettings: state.userSettings,
});

export default connect(mapStateToProps)(WeightEntry);
