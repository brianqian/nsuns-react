import React from "react";
import { connect } from "react-redux";
import LoginSignup from "../LoginSignup/LoginSignup";
import BasicSelector from "./BasicSelector/BasicSelector";
import { openSettings } from "../../actions";
import styled from "styled-components";
import generateSettings from "./UserSettingsOptions";

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #596d83;
  z-index: 10;
  position: absolute;
  transition: transform 0.25s;
  ${props => (props.open ? "" : "transform: translate(-200px);")}
  overflow: hidden;
`;

function UserSettings(props) {
  const {
    userId,
    accessories: { accessoryPlan, custom },
    userSettings: { standard, variation, timerOption, wbOption },
  } = props;

  const settings = generateSettings(
    userId,
    accessoryPlan,
    custom,
    standard,
    variation,
    timerOption,
    wbOption
  );

  return (
    <Container open={props.settingsOpen}>
      <LoginSignup />
      <BasicSelector {...settings.standardOptions} />
      <BasicSelector {...settings.accOptions} />
      <BasicSelector {...settings.variationOptions} />
      <BasicSelector {...settings.weightBoxOptions} />
      {wbOption === "timer" && <BasicSelector {...settings.timerBoxOptions} />}
      <button onClick={() => props.dispatch(openSettings(false))}>Close Settings</button>
    </Container>
  );
}

const mapStateToProps = state => ({
  settingsOpen: state.userSettings.settingsOpen,
  accessories: state.accessories,
  userSettings: state.userSettings,
  userId: state.userAuth.userId,
});

export default connect(mapStateToProps)(UserSettings);
