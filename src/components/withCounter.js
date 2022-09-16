import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    handelIncrement = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return <WrappedComponent incrementCount={this.handelIncrement} count={this.state.count} {...this.props} />;
    }
  }
  return WithCounter;
};

export default withCounter;
