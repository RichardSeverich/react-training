import React from "react";
import ICounterViewProps from "./ICounterViewComponentProps"

class CounterViewComponent extends React.PureComponent<ICounterViewProps> {

  render(): React.ReactElement {
    const {
      increment,
      decrement,
      counterModel
    } = this.props
    return (
      <div>
        <p>You clicked {counterModel.counter} times</p>
        <button onClick={() => increment(counterModel)}>increment</button>
        <button onClick={() => decrement(counterModel)}>decrement</button>
      </div>
    )
  }
}

export default CounterViewComponent;