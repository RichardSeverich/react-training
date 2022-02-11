import { Fragment } from 'react';

import StreamBuilder from './StreamBuilder';

const myBuilder = (snapshot) => {
  return <p>Count: {snapshot}</p>;
}

const Counter = ({ bloc }) => (
  <Fragment>
    <button onClick={() => bloc.increase()}>increment</button>
    <button onClick={() => bloc.decrease()}>decrement</button>
    <label size="large" color="olive">
      <StreamBuilder
        initialData={0}
        stream={bloc.counter()}
        builder={myBuilder}
      />
    </label>
  </Fragment>
);

export default Counter;