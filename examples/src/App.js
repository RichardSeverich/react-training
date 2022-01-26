import CounterNormalOne from "./components/CounterNormalOne";
import CounterNormalTwo from "./components/CounterNormalTwo";
import CounterClass from "./components/CounterClass";
import CounterReducer from "./components/CounterReducer";

function App() {
  return (
    <div className="App">
      <h3>Counter Normal One</h3>
      <CounterNormalOne></CounterNormalOne >

      <h3>Counter Normal Two</h3>
      <CounterNormalTwo></CounterNormalTwo >

      <h3>Counter Class</h3>
      <CounterClass></CounterClass >

      <h3>Counter Reducer</h3>
      <CounterReducer></CounterReducer >

    </div>
  );
}

export default App;
