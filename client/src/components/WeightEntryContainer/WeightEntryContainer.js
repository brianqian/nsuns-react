import React, { Component } from "react";
import { connect } from "react-redux";
import { userLiftOnChange } from "../../actions";
import { saveUserLifts } from "../../utils/userInfo";
import WeightEntryInput from "./WeightEntryInput";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
`;
const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.25rem 1rem;
  justify-content: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.25rem 1rem;
  }
`;

//All training maxes are labeled TM <lift> and should be on the right side in mobile view
const StyledWeightInput = styled(WeightEntryInput)`
  @media (max-width: 800px) {
    grid-row: ${props => props.gridRow};
    grid-column: ${props => (props.label[0] === "T" ? "2" : "1")};
  }
`;

// const StyledCalculator = styled(Calculator)`
//   grid-column: span 3;
//   @media (max-width: 800px) {
//     grid-column: span 2;
//   }
// `;

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
    const { userLifts } = this.props;
    return (
      <div>
        <Container>
          <FormContainer onSubmit={this.handleSubmit}>
            <StyledWeightInput
              label="1RM Bench"
              onChange={this.onChange}
              value={userLifts.benchRM || ""}
              name="benchRM"
            />
            <StyledWeightInput
              label="1RM OHP"
              onChange={this.onChange}
              value={userLifts.ohpRM || ""}
              name="ohpRM"
            />
            <StyledWeightInput
              label="1RM Squat"
              onChange={this.onChange}
              value={userLifts.squatRM || ""}
              name="squatRM"
            />
            <StyledWeightInput
              label="1RM Deadlift"
              onChange={this.onChange}
              value={userLifts.deadliftRM || ""}
              name="deadliftRM"
            />
            <StyledWeightInput
              gridRow="1"
              label="TM Bench"
              onChange={this.onChange}
              value={userLifts.benchTM || ""}
              name="benchTM"
            />
            <StyledWeightInput
              gridRow="2"
              label="TM OHP"
              onChange={this.onChange}
              value={userLifts.ohpTM || ""}
              name="ohpTM"
            />
            <StyledWeightInput
              gridRow="3"
              label="TM Squat"
              onChange={this.onChange}
              value={userLifts.squatTM || ""}
              name="squatTM"
            />
            <StyledWeightInput
              gridRow="4"
              label="TM Deadlift"
              onChange={this.onChange}
              value={userLifts.deadliftTM || ""}
              name="deadliftTM"
            />
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
