import { Reducer } from "redux";
import { IName, IActionName, ActionNameType } from "./types";

const initialState: IName = {
  value: ""
};

const nameReducer: Reducer<IName, IActionName> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionNameType.CHANGE: {
      return { value: action.payload.value };
    }
    default: {
      return state;
    }
  }
};

export default nameReducer;
