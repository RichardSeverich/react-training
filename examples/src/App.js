import CounterNormalOne from "./components/CounterNormalOne";
import CounterNormalTwo from "./components/CounterNormalTwo";
import CounterClass from "./components/CounterClass";
import CounterReducer from "./components/CounterReducer";
import CounterUseContextFather from "./components/CounterUseContextFather";
import CounterContextReducerFather from "./components/CounterContextReducerFather";
import CounterUseEffect from "./components/CounterUseEffect";

import "./App.css"

function App() {
  return (
    <div className="App">

      <div className="counter-container">
        <h3>Counter Normal One</h3>
        <CounterNormalOne></CounterNormalOne >
      </div>
      <div className="counter-container">
        <h3>Counter Normal Two</h3>
        <CounterNormalTwo></CounterNormalTwo >
      </div>
      <div className="counter-container">
        <h3>Counter Class</h3>
        <CounterClass></CounterClass >
      </div>
      <div className="counter-container">
        <h3>Counter Reducer</h3>
        <CounterReducer></CounterReducer >
      </div>
      <div className="counter-container">
        <h3>Counter Use Context with UseState</h3>
        <CounterUseContextFather></CounterUseContextFather >
      </div>
      <div className="counter-container">
        <h3>Counter Use Context with Use Reducer</h3>
        <CounterContextReducerFather></CounterContextReducerFather >
      </div>
      <div className="counter-container">
        <h3>Counter UseEffect</h3>
        <CounterUseEffect></CounterUseEffect >
      </div>
    </div>
  );
}

export default App;
