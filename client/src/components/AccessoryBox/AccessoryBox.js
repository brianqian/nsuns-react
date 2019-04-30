import React, { Component } from "react";
import { connect } from "react-redux";
import AccessoryRow from "./AccessoryRow/AccessoryRow";
import styled from "styled-components";

const AccessoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 3fr);
  font-family: "Roboto";
  grid-column: 1/5;
  @media (max-width: 800px) {
    grid-column: 1/-1;
  }
  > button {
    grid-column: 3;
    height: 3rem;
  }
`;

const AccessoryContainerTitle = styled.div`
  grid-column: 2/5;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-auto-flow: column;
  justify-items: center;
`;

class AccessoryBox extends Component {
  state = {
    addNewAccessory: false,
  };
  addAccessory = () => {
    this.setState({ addNewAccessory: this.state.addNewAccessory ? false : true });
  };

  render() {
    const {
      accessories,
      accessories: { accessoryPlan },
      userAuth,
      dayIndex,
      userSettings: { standard },
    } = this.props;
    const accessoryItems = accessories[accessoryPlan][dayIndex].map(accessory => {
      return <AccessoryRow key={accessory.id} {...accessory} />;
    });

    const { addNewAccessory } = this.state;
    return (
      <AccessoryContainer>
        <AccessoryContainerTitle>
          <h4>Title</h4>
          <h4>SetsxReps</h4>
          <h4>Weight({standard})</h4>
        </AccessoryContainerTitle>
        {accessoryItems}
        {addNewAccessory && <AccessoryRow toggleAddBox={this.addAccessory} dayIndex={dayIndex} />}
        {userAuth.loggedIn && (
          <button onClick={this.addAccessory}>
            {addNewAccessory ? "Cancel" : "Add Accessory"}
          </button>
        )}
      </AccessoryContainer>
    );
  }
}
const mapStateToProps = state => ({
  userAuth: state.userAuth,
  accessories: state.accessories,
  userSettings: state.userSettings,
});

export default connect(mapStateToProps)(AccessoryBox);
