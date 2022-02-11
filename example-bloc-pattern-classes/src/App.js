import Counter from './components/Counter';
import CounterBloc from './blocs/CounterBloc';

const bloc = new CounterBloc();

function App() {
  return (
    <div className="App">
      <h1>Hello bloc pattern</h1 >
      <Counter bloc={bloc}></Counter>
    </div>
  );
}

export default App;
