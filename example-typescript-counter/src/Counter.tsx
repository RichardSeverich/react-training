import React from "react";
import ICounterProps from "./ICounterProps"
import ICounterState from "./ICounterState"

class Counter extends React.Component<ICounterProps, ICounterState> {
  
  constructor(props: ICounterProps){
    super(props);
    this.state = {
      counter: 0
    };
  }

  private increment(): void {
    this.setState({ counter: this.state.counter + 1 });
  }
  private decrement(): void {
    this.setState({ counter: this.state.counter + -1 });
  }
  private otherExample(id: number): void { }

  render() {
    return (
      <div>
        <p>You clicked {this.state.counter} times</p>
        <button onClick={() => this.increment()}>increment</button>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    )
  }
}

export default Counter;
