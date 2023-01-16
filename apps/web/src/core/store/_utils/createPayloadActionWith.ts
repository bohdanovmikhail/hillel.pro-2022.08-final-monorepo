import { IAction, IActionType } from './createAction';

type AnyFn = (...args: any) => any;

export interface PayloadActionWith<T extends string, P> extends IAction<T> {
  payload: P;
}

export type IPayloadActionWithCreator<
  P extends ReturnType<PC>,
  T extends string = string,
  PC extends AnyFn = AnyFn,
  Args extends Parameters<PC> = Parameters<PC>,
> = ((...args: Args) => PayloadActionWith<T, P>) & IActionType<T>;

export function createPayloadActionWith<
  P extends ReturnType<PC>,
  T extends string = string,
  PC extends AnyFn = AnyFn,
  Args extends Parameters<PC> = Parameters<PC>
>(
  type: T,
  payloadCreator: PC,
): IPayloadActionWithCreator<P, T, PC, Args> & IActionType<T> {
  const actionCreator = (...args: Args): PayloadActionWith<T, P> => ({
    type,
    payload: payloadCreator(...args),
  });
  actionCreator.TYPE = type;

  return actionCreator;
}
