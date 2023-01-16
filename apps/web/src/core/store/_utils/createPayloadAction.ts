import { IAction, IActionType } from './createAction';

export interface PayloadAction<T extends string, P> extends IAction<T> {
  payload: P;
}

export type IActionPayloadCreator<T extends string, P> = ((payload: P) => PayloadAction<T, P>) & IActionType<T>;

export function createPayloadAction<T extends string, P>(type: T): IActionPayloadCreator<T, P> {
  const actionCreator = (payload: P) => ({ type, payload });
  actionCreator.TYPE = type;

  return actionCreator;
}
