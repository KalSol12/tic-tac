import React, { Component } from "react";

class UserGreeting extends Component {
  /**
   *
   */
  constructor() {
    super();
    this.state = {
      islogged: true,
    };
  }
  render() {
    return (
      this.state.islogged && (
        <div>
          <h1>hello kaleab</h1>
        </div>
      )
    );

    // return this.state.islogged ? (
    //   <div>
    //     <h1>hloo kaleab</h1>
    //   </div>
    // ) : (
    //   <div>
    //     <h1>hello guest</h1>
    //   </div>
    // );

    // let message;
    // if (this.state.islogged) {
    //   message = (
    //     <div>
    //       <h1>hello kaleab</h1>
    //     </div>
    //   );
    // } else {
    //   message = (
    //     <div>
    //       <h1>helo guest</h1>
    //     </div>
    //   );
    // }
    // return message;
  }
}

export default UserGreeting;
