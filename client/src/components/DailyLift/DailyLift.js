import React, { Component } from "react";
import WeightBox from "../WeightBox/WeightBox";
import AccessoryBox from "../AccessoryBox/AccessoryBox";
import { connect } from "react-redux";
import styled from "styled-components";

const DailyLiftContainer = styled.div`
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr repeat(3, 3fr);
  @media (max-width: 800px) {
    scroll-snap-align: center;
    min-width: 100vw;
    margin: 0rem;
    grid-template-columns: repeat(6, 1fr);
  }
`;
const DailyLiftRow = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  align-items: center;
  justify-content: center;
  grid-column: 1/5;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr);
    grid-column: ${props => props.gridCol800px};
  }
`;

const DayTitle = styled.h2`
  font-family: "Noto Serif", Georgia, "Times New Roman", Times, serif;
  text-align: center;
  grid-column: 3;
  grid-row: ${props => props.rest && 2};
  @media (max-width: 800px) {
    grid-column: 3/5;
    max-height: 35px;
  }
`;

const AccessoriesButton = styled.p`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px gray solid;
  height: 100%;
  width: 100%;
  font-family: "Roboto";
`;

const LiftTitle = styled.h3`
  grid-column: 1/3;
  width: 100%;
  @media (max-width: 800px) {
    grid-column: 1;
    width: 100%;
    text-align: center;
    > p {
      grid-column: span 1;
    }
  }
`;

class dailyLift extends Component {
  state = {
    openAccessoryBox: false,
  };

  handleClick = () => {
    this.setState({ openAccessoryBox: this.state.openAccessoryBox ? false : true });
  };

  render() {
    const {
      day,
      t1Lift,
      t2Lift,
      t1Reps,
      t1Weights,
      t2Reps,
      t2Weights,
      max1,
      max2,
      dayIndex,
    } = this.props;
    const isRestDay = day === "--REST--";
    const { openAccessoryBox } = this.state;
    const t1Workouts = t1Reps.map((rep, i) => {
      return <WeightBox key={"wbt1" + dayIndex + i} reps={rep} weights={t1Weights[i]} max={max1} />;
    });
    const t2Workouts = t2Reps.map((rep, i) => {
      return <WeightBox key={"wbt2" + dayIndex + i} reps={rep} weights={t2Weights[i]} max={max2} />;
    });
    return (
      <DailyLiftContainer>
        <DayTitle rest={isRestDay}>{day}</DayTitle>
        <DailyLiftRow gridCol800px="1/4">
          <LiftTitle>{t1Lift}</LiftTitle>
          {t1Workouts}
        </DailyLiftRow>
        <DailyLiftRow gridCol800px="4/7">
          <LiftTitle>{t2Lift}</LiftTitle>
          {t2Workouts}
          {!isRestDay && (
            <AccessoriesButton onClick={this.handleClick}>
              Accessories
              <img
                onClick={this.toggleExpand}
                src={openAccessoryBox ? "./collapse-button.svg" : "./expand-button.svg"}
                alt=""
                height="auto"
                width="10%"
              />
            </AccessoriesButton>
          )}
        </DailyLiftRow>
        {openAccessoryBox && <AccessoryBox dayIndex={dayIndex} />}
      </DailyLiftContainer>
    );
  }
}
const mapStateToProps = state => ({
  accessories: state.accessories,
});

export default connect(mapStateToProps)(dailyLift);
