import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = (e) => {
    this.setState({ count: this.state.count + 1 });
  }
  decrement = (e) => {
    this.setState({ count: this.state.count + -1 });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.increment()}>increment</button>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    );
  }
}

export default CounterClass;