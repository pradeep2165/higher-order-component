import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    handelIncrement = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      console.log(this.props);
      return <WrappedComponent incrementCount={this.handelIncrement} count={this.state.count} />;
    }
  }
  return WithCounter;
};

export default withCounter;
