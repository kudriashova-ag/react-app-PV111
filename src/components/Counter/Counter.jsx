import React, { useState } from "react";
import Forma from "../Form/Forma";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>

      <button onClick={() => setCount(count + 2)}> +2 </button>


      <Forma />
      
    </div>
  );
};

export default Counter;
