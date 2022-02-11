import React, { useState, useEffect } from 'react';

const StreamBuilder = function (props) {

  const { initialData, stream } = props;

  const [snapshot, setSnapshot] = useState(initialData);

  useEffect(() => {
    stream.subscribe(
      (data) => {
        setSnapshot(data);
      }
    );
  }, []);

  return (
    <>{props.builder(snapshot)}</>
  )
}

export default StreamBuilder;

