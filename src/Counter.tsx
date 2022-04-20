import React, { useState, useCallback, memo } from 'react';

const set = new Set();

function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const [sCounter, setSCounter] = useState<number>(0);

  const increment = useCallback(() => setCounter(counter + 1), [counter]);

  const decrement = useCallback(() => setCounter(counter - 1), [counter]);

  const incrementSCounter = useCallback(() => setSCounter(sCounter + 1), [sCounter]);

  set.add(increment);
  set.add(decrement);
  set.add(incrementSCounter);

  console.log('Number of created function', set.size);

  return (
    <>
      <p>Counter: {counter}</p>

      <div style={{display: 'flex', gap: '5px', marginBottom: '10px'}}>
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={decrement}>Decrement</button>
        <button type="button" onClick={incrementSCounter}>Increment Other Counter</button>
      </div>
    </>
  );
}

export default memo(Counter);
