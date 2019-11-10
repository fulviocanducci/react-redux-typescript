import { Reducer } from "redux";
import { ICounter, IActionCounter, ActionCounterType } from "./types";

const initialState: ICounter = {
  value: 0
};

const counterReducer: Reducer<ICounter, IActionCounter> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionCounterType.INCREMENT: {
      return { value: state.value + 1 };
    }
    case ActionCounterType.DECREMENT: {
      return { value: state.value - 1 };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
