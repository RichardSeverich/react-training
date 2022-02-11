import { Fragment } from 'react';

import StreamBuilder from './StreamBuilder';

const Counter = ({ bloc }) => (
  <Fragment>
    <button onClick={() => bloc.increase()}>increment</button>
    <button onClick={() => bloc.decrease()}>decrement</button>
    <p>
      <label size="large" color="olive">
        Count:
        <StreamBuilder
          initialData={0}
          stream={bloc.counter}
          builder={snapshot => <p>{snapshot.data}</p>}
        />
      </label>
    </p>
  </Fragment>
);

export default Counter;