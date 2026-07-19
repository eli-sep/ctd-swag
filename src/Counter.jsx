import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  function add() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button type="button" onClick={add}>
        Add
      </button>
    </>
  );
}
