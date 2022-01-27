import React, { useReducer } from "react";
import CounterUseContextChild from "./CounterUseContextChild";
import ContextCounter from "../context/ContextCounter"
import reducerCounter from "../reducers/reducerCounter";

const CounterContextReducerFather = (props) => {
  const [state, dispath] = useReducer(reducerCounter.reducer, reducerCounter.initialState());

  const increment = () => {
    dispath({ type: "INCREMENT" });
  }
  const decrement = () => {
    dispath({ type: "DECREMENT" });
  }

  const valueConextCounter = {
    count: state.count,
    increment,
    decrement
  }

  return (
    <ContextCounter.Provider value={valueConextCounter}>
      <CounterUseContextChild></CounterUseContextChild>
    </ContextCounter.Provider>
  );
}

export default CounterContextReducerFather;