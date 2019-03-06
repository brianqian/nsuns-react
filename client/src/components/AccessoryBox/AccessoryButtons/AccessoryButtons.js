import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div className="accessory__item-icons">
        <button onClick={() => this.props.deleteAcc()}>X</button>
        <img
          onClick={this.toggleClicked}
          src={this.state.clicked ? './save_icon.svg' : './pencil-edit-button.svg'}
        />
      </div>
    );
  }
}

export default connect()(AccessoryButtons);
