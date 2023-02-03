import { IActionCreator } from '../types';

export function createAction<
  T extends string,
>(type: T): IActionCreator<T> {
  const actionCreator = () => ({ type });
  actionCreator.TYPE = type;
  actionCreator.toString = () => type;

  return actionCreator;
}
