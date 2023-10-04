import { useState } from 'react';
// Custom hook
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return [count, increment, decrement];
}

// Component using the custom hook
function CounterComponent() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default CounterComponent;
