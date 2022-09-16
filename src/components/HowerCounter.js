import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HowerCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div style={{ margin: "20px" }}>
        <button onMouseOver={incrementCount}>hover me {count} time</button>
      </div>
    );
  }
}

export default UpdatedComponent(HowerCounter);
