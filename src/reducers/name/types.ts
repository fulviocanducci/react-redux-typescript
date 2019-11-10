export interface IName {
  value: string;
}

export interface IStateName {
  name: IName;
}

export enum ActionNameType {
  CHANGE = "CHANGE"
}

export interface IActionName {
  type: ActionNameType;
  payload: {
    value: string;
  };
}
