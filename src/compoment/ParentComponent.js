import React, { Component } from "react";
import ChildComponet from "./ChildComponet";

class ParentComponent extends Component {
  /**
   *
   */
  constructor() {
    super();
    this.state = {
      parentName: "parenet",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert("this is " + this.state.parentName + childName);
  }
  render() {
    return (
      <div>
        <ChildComponet greatHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
