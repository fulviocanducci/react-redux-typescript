import React, { FC } from "react";
import { IStateCounter, ActionCounterType } from "../reducers/counter/types";
import { useSelector, useDispatch } from "react-redux";

const Counter: FC = () => {
  const state = useSelector<IStateCounter, number>(
    state => state.counter.value
  );
  const dispatch = useDispatch();
  const dispatchIncrement = () =>
    dispatch({ type: ActionCounterType.INCREMENT });
  const dispatchDecrement = () =>
    dispatch({ type: ActionCounterType.DECREMENT });
  return (
    <div>
      <div>{state}</div>
      <button onClick={dispatchIncrement}>Increment</button>
      <button onClick={dispatchDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
