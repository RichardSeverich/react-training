import React, { useState } from "react";
import CounterUseContextChild from "./CounterUseContextChild";
import ContextCounter from "../context/ContextCounter"

const CounterUseContextFather = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  const valueConextCounter = {
    count: count,
    increment,
    decrement
  }

  return (
    <ContextCounter.Provider value={valueConextCounter}>
      <CounterUseContextChild></CounterUseContextChild>
    </ContextCounter.Provider>
  );
}

export default CounterUseContextFather;
