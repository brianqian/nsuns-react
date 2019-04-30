import React, { Component } from "react";
import UserSettings from "./components/UserSettings/UserSettings";
import { connect } from "react-redux";
import { jwtLogin, openSettings } from "./actions";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr 75px;
  grid-template-rows: 35px 1fr 3%;
  grid-row-gap: 1rem;
  overflow: auto;
  background-color: #ccc9dc41;
  height: 100vh;
  @media (max-width: 800px) {
    .App {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
`;

const Header = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
`;

const WelcomeTag = styled.div`
  flex: 3;
  margin: 0 2rem;
  align-self: center;
`;

const Content = styled.main`
  grid-row: 2;
  grid-column: 2;
`;
const UserSettingsButton = styled.div`
  flex: 1;
  max-width: 120px;
  background-color: #1b2a41;
  font-size: 1rem;
  padding: 0.5rem;
  color: #ccc9dc;
  user-select: none;
  :hover {
    border: 1.2px #000 solid;
    box-sizing: border-box;
    cursor: default;
  }
  :active {
    background-color: #ccc9dc;
    color: #1b2a41;
  }
`;

//For Testing
Container.displayName = "Container";
WelcomeTag.displayName = "WelcomeTag";
Header.displayName = "Header";
Content.displayName = "Content";
UserSettingsButton.displayName = "UserSettingsButton";

class App extends Component {
  componentDidMount = () => {
    const userToken = localStorage.getItem("userId");
    if (userToken) this.props.dispatch(jwtLogin(userToken));
  };

  toggleSettings = () => {
    const { dispatch, settingsOpen } = this.props;
    dispatch(openSettings(settingsOpen ? false : true));
  };

  render() {
    const { username } = this.props.userAuth;
    return (
      <Container>
        <UserSettings />
        <Header>
          <WelcomeTag>{username && `Welcome ${username}`}</WelcomeTag>
          <UserSettingsButton className="App__settings-button" onClick={this.toggleSettings}>
            Login/Settings
          </UserSettingsButton>
        </Header>
        <Content>{this.props.children}</Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  settingsOpen: state.userSettings.settingsOpen,
  accessories: state.accessories,
  userAuth: state.userAuth,
  userSettings: state.userSettings,
  userLifts: state.userLifts,
  dailySplits: state.dailySplits,
});

export default connect(mapStateToProps)(App);
