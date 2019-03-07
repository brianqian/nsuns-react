import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const AccessoryIcons = styled.div`
  display: flex;
  grid-column: 1;
  > img {
    height: 15px;
    width: 15px;
  }
  > * {
    @media (max-width: 800px) {
      flex: 1;
      align-self: center;
    }
  }
`;

class AccessoryButtons extends Component {
  state = {
    clicked: false,
  };
  componentDidMount = () => {
    if (this.props.clicked) this.setState({ clicked: true });
  };

  toggleClicked = async () => {
    const { clicked } = this.state;
    if (!this.props.id) this.props.toggleAddBox();
    this.props.editAcc();
    this.setState({ clicked: clicked ? false : true });
  };

  render() {
    return (
      <AccessoryIcons>
        <button onClick={() => this.props.deleteAcc()}>X</button>
        <img
          onClick={this.toggleClicked}
          alt={this.state.clicked ? 'save' : 'edit'}
          src={this.state.clicked ? './save_icon.svg' : './pencil-edit-button.svg'}
        />
      </AccessoryIcons>
    );
  }
}

export default connect()(AccessoryButtons);
