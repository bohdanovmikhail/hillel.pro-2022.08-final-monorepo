import { IErrorActionCreator } from '../types';

export function createErrorAction<
  E,
  T extends string = string,
>(type: T): IErrorActionCreator<E, T>  {
  const actionCreator = (error: E) => ({ type, error });
  actionCreator.TYPE = type;
  actionCreator.toString = () => type;

  return actionCreator;
}
