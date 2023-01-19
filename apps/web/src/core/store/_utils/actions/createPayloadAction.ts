import { IPayloadActionCreator } from '../types';

export function createPayloadAction<T extends string, P>(type: T): IPayloadActionCreator<T, P> {
  const actionCreator = (payload: P) => ({ type, payload });
  actionCreator.TYPE = type;

  return actionCreator;
}
