import { useState } from "react";

const Counter = ({ start }) => {
  let [counter, setCounter] = useState(parseInt(start) || 0);

  return (
    <div className="flex gap-2 items-center">
      <button className="btn" onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
      <p>{counter}</p>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
