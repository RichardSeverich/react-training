import React, { useState, useEffect } from "react";

const CounterUseEffect = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  const useEffectReturn = () => {
    console.log("useEffect 'return' function executed when unmount component: " + count);
  }

  const useEffectParameter = () => {
    console.log("useEffect 'parameter' function executed after the render: " + count);
    return useEffectReturn;
  }

  /**
   * Concepts:
   * Rendering: Any time react creating or updating DOM.
   * Mounting: First time react Rendering.
   */

  /** 
   * useEffect recive two parameters. (a function and array)
   * useEffect function executed any time after 'react' render.
   * useEffect function executed any time after 'state' changed value.
   * useEffect function executed any time after component mounting.
   * useEffect function contains another function that return. RF (retun function).
   * RF executed when component un-mounting.
   * componenet 'un-mounting' is executed any time you update component.
  */

  /** 
   * useEffect with only one parameter.
   * It executed any time after 'state' changed value.
   * useEffect(useEffectParameter);
  */

  /** 
   * useEffect with two parameters array no empty.
   * It executed any time after 'state' changed value.
   * useEffect(useEffectParameter, [count]);
  */

  /** 
   * useEffect with two parameters array empty.
   * It executed only once after component render first time.
   * useEffect(useEffectParameter, []);
  */

  useEffect(useEffectParameter, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
}

export default CounterUseEffect;