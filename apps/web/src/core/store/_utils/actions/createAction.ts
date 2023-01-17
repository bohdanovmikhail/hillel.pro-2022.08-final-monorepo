export interface IAction<T extends string> {
  type: T;
}

export interface IActionType<T> {
  TYPE: T;
}

export type IActionCreator<T extends string> = (() => IAction<T>) & IActionType<T>;

export function createAction<T extends string>(type: T): IActionCreator<T> {
  const actionCreator = () => ({ type });
  actionCreator.TYPE = type;

  return actionCreator;
}
