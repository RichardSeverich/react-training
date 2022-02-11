import Counter from './components/Counter';
import CounterBloc from './blocs/CounterBloc';


function App() {
  return (
    <div className="App">
      <h1>Hello bloc pattern</h1 >
      <Counter bloc={CounterBloc}></Counter>
    </div>
  );
}

export default App;
