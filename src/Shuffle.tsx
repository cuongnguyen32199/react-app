import React, { memo } from 'react';

type PropsType = {
  name: string;
  clearName: (name: string) => void
};

function WrappedShuffle({ name, clearName }: PropsType) {
  console.log('WrappedShuffle re-render');

  return <div>
    <p>Selected: {name || 'None'}</p>
    <button type="button" onClick={() => clearName('')}>Reset Name</button>
  </div>;
}

const NameShuffling = memo(WrappedShuffle);

export default WrappedShuffle;
