import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comment: "",
      topic: "react",
    };
  }
  inputHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  commentHandler = (event) => {
    this.setState({ comment: event.target.value });
  };
  topicHandler = (event) => {
    this.setState({ topic: event.target.value });
  };

  handeleinpute = (event) => {
    alert(`${this.state.name}  ${this.state.comment}  ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handeleinpute}>
        <div>
          <label>Form deta</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.inputHandler}
          />
        </div>
        <div>
          <label>Commment</label>
          <textarea value={this.state.comment} onChange={this.commentHandler} />
        </div>
        <div>
          <select value={this.state.topic} onChange={this.topicHandler}>
            <option>react</option>
            <option>Angular</option>
            <option>vue</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
