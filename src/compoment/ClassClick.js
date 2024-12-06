import React, { Component } from "react";

export class ClassClick extends Component {
  constructor() {
    super();
    this.state = {
      name: "plus",
    };
    //this.classHandler = this.classHandler.bind(this);
  }
  //   classHandler() {
  //     this.setState({
  //       name: "minus",
  //     });
  //   }

  classHandler = () => {
    this.setState({
      name: "minus",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        {/* <button onClick={this.classHandler.bind(this)}>click me class</button> */}
        {/* <button onClick={() => this.classHandler()}>click me class</button> */}
        {/* <button onClick={this.classHandler}>click me class</button> */}
        <button onClick={this.classHandler}>click me class</button>
      </div>
    );
  }
}

export default ClassClick;
