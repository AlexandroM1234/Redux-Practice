import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  resetAmount,
} from "../slices/counterSlice";
// import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [changeAmount, setChangeAmount] = useState(0);

  const handleIncrement = () => {
    dispatch(incrementByAmount(Number(changeAmount) || 0));
  };

  const handleDecrement = () => {
    dispatch(decrementByAmount(Number(changeAmount) || 0));
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input
          value={changeAmount}
          onChange={(e) => setChangeAmount(e.target.value)}
        />

        <button onClick={handleIncrement}>Add Amount</button>
        <button onClick={handleDecrement}> Remove Amount </button>
        <button onClick={useDispatch(resetAmount())}> Reset Amount </button>
      </div>
    </div>
  );
}
