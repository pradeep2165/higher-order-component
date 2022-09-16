import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          {this.props.name} Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
