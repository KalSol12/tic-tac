import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increamnet() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    // console.log(this.state.count);
    this.setState((previes) => ({
      count: previes.count + 1,
    }));
  }
  iincreamentfive() {
    this.increamnet();
    this.increamnet();
    this.increamnet();
    this.increamnet();
    this.increamnet();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.iincreamentfive()}>Increament</button>
      </div>
    );
  }
}

export default Count;
