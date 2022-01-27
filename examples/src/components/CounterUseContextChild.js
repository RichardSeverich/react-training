import React from "react";
import useCounter from "../hooks/useCounter"
const CounterUseContextChild = (props) => {
  const contextCounter = useCounter();
  return (
    <div>
      <p>You clicked {contextCounter.count} times</p>
      <button onClick={() => contextCounter.increment()}>Increment</button>
      <button onClick={() => contextCounter.decrement()}>Decrement</button>
    </div>
  );
}

export default CounterUseContextChild;