import React, { useReducer } from "react";
import reducerCounter from "../reducers/reducerCounter";

const CounterReducer = (props) => {
  //const [state, dispath] = useReducer(AcaElReducer, AcaElEstadoInicial);
  const [state, dispath] = useReducer(reducerCounter.reducer, reducerCounter.initialState());

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={() => dispath({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispath({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default CounterReducer;