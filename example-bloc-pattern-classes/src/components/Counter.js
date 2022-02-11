import StreamBuilder from './StreamBuilder';

const Counter = ({ bloc }) => (
  <>
    <button onClick={() => bloc.increase()}>increment</button>
    <button onClick={() => bloc.decrease()}>decrement</button>
    <p>
      <label size="large" color="olive">
        Count:
        <StreamBuilder
          initialData={0}
          stream={bloc.counter}
          builder={snapshot => <>{snapshot.data}</>}
        />
      </label>
    </p>
  </>
);

export default Counter;