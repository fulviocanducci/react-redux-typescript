export interface ICounter {
  value: number;
}

export interface IStateCounter {
  counter: ICounter;
}

export interface IActionCounter {
  type: ActionCounterType;
}

export enum ActionCounterType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}
