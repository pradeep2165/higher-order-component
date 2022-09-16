import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HowerCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  mouseOverHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onMouseOver={this.mouseOverHandler}>
          {this.props.name} hover me {this.state.count} time
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(HowerCounter);
