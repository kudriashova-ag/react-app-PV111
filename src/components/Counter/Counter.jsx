import React, { useMemo, useRef, useState } from "react";
import Forma from "../Form/Forma";
import IsFive from "./isFive";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [some, setSome] = useState(true);

  const click = useRef(0);
  const btn = useRef(null);


  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
    click.current++;
    // console.log(click.current);
    btn.current.style.background = 'red'
  };

  const factorialCount = useMemo( () => factorial(count), [count]);

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={() => setCount(count + 2)}> +2 </button>
      <hr />
      Factorial: {factorialCount} <br />
      <button
        ref={btn}
        onClick={() => {
          setSome(!some);
        }}
      >
        Change Some State
      </button>
      <IsFive count={count} />
    </div>
  );
};



const factorial = (n) => {
  // console.log("factorial");
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

export default Counter;
