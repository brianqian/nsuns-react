import React, { Component } from 'react';

class InputNumber extends Component {
  state = {
    content: '',
  };
  onChange = e => {
    this.setState({ content: e.target.value });
  };
  onClick = () => {
    this.props.onSubmit(this.state.content);
  };
  render() {
    return (
      <form>
        <label htmlFor="">{this.props.label}</label>
        <input onChange={this.onChange} type="number" value={this.state.content} />
        <button onClick={this.onClick}>Save</button>
      </form>
    );
  }
}

export default InputNumber;
