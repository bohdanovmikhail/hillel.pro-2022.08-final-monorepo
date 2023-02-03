import { IPayloadActionCreator } from '../types';

export function createPayloadAction<
  P,
  T extends string = string,
>(type: T): IPayloadActionCreator<P, T> {
  const actionCreator = (payload: P) => ({ type, payload });
  actionCreator.TYPE = type;
  actionCreator.toString = () => type;

  return actionCreator;
}
