import { IErrorActionCreator } from '../types';

export function createErrorAction<T extends string, E>(type: T): IErrorActionCreator<T, E>  {
  const actionCreator = (error: E) => ({ type, error });
  actionCreator.TYPE = type;

  return actionCreator;
}
