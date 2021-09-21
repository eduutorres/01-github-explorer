import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
