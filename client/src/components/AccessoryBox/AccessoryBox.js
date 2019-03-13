import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccessoryRow from './AccessoryRow/AccessoryRow';
import styled from 'styled-components';

const AccessoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 3fr);
  font-family: 'Roboto';
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
      dayIndex,
      dailySplits,
      userSettings: { standard, variation, cap3Week },
      userAuth: { loggedIn },
      accessories: { accessoryPlan },
    } = this.props;

    const currentPlan = [...accessories[accessoryPlan]];
    /*TODO: logic needs to be reworked to either disallow 5 day accessory plans
or put filler in state.
the accessoryAction reads the index of the item to change based off the store.

*/
    // const weekLength = dailySplits[variation + cap3Week].length;
    // const accessoryLength = accessories[accessoryPlan].length;
    // if (weekLength > accessoryLength) {
    //   const diff = weekLength - accessoryLength;
    //   const filler = Array(diff).fill([]);
    //   currentPlan.push(...filler);
    // }

    const accessoryItems = currentPlan[dayIndex].map(accessory => {
      const props = { ...accessory, dayIndex };
      return <AccessoryRow {...props} key={accessory.id} />;
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
        {loggedIn && (
          <button onClick={this.addAccessory}>
            {addNewAccessory ? 'Cancel' : 'Add Accessory'}
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
  dailySplits: state.dailySplits,
});

export default connect(mapStateToProps)(AccessoryBox);
