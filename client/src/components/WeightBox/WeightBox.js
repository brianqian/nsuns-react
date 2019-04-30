import React, { Component } from "react";
import { calcDailyLift } from "../../utils";
import { connect } from "react-redux";
import WeightBoxTimer from "./WeightBoxTimer";
import styled from "styled-components";

const WeightBoxContainer = styled.div`
  grid-column: span 2;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  display: flex;

  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100%;
  user-select: none;
  border: 0.5px solid gray;
  :hover {
    font-size: 1.05rem;
  }
  @media (max-width: 800px) {
    max-height: 250px;
    margin: 0;
  }
  > * {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const WeightBoxContent = styled.p`
  color: ${props => (props.selected ? "white" : "inherit")};
  background-color: ${props => (props.selected ? "#000" : "inherit")};
`;

class WeightBox extends Component {
  state = {
    selected: false,
    inTimerMode: false,
  };

  handleClick = () => {
    const timerMode = this.props.userSettings.wbOption === "timer";
    if (timerMode && !this.state.selected) {
      this.setState({ inTimerMode: true });
    } else {
      this.setState({ selected: this.state.selected ? false : true });
    }
  };

  exitTimerMode = () => {
    this.setState({ inTimerMode: false, selected: true });
  };

  render() {
    const {
      reps,
      weights,
      max,
      userSettings: { standard },
    } = this.props;
    const { inTimerMode } = this.state;
    const weight = calcDailyLift(weights, max, standard);

    return (
      <WeightBoxContainer>
        {!inTimerMode ? (
          <WeightBoxContent onClick={this.handleClick} selected={this.state.selected}>
            {reps}x{weight} {standard}
          </WeightBoxContent>
        ) : (
          <WeightBoxTimer exitTimerMode={this.exitTimerMode} />
        )}
      </WeightBoxContainer>
    );

    // <p>{timerVal}</p>
  }
}
const mapStateToProps = state => ({
  userSettings: state.userSettings,
});

export default connect(mapStateToProps)(WeightBox);
