import React, { Component } from "react";
class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "hollo visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "thank you",
    });
  }
  render() {
    const { name, lastName } = this.props;
    return (
      <div>
        <h1>
          {name} {lastName}
        </h1>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>click me</button>
      </div>
    );
  }
}

export default Welcome;
