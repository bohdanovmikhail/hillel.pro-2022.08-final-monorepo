import { IActionType, IPayloadAction, IPayloadActionWithCreator, IAnyFn } from '../types';

export function createPayloadActionWith<
  P extends ReturnType<PC>,
  T extends string = string,
  PC extends IAnyFn = IAnyFn,
  Args extends Parameters<PC> = Parameters<PC>
>(
  type: T,
  payloadCreator: PC,
): IPayloadActionWithCreator<P, T, PC, Args> {
  const actionCreator = (...args: Args): IPayloadAction<P, T> => ({
    type,
    payload: payloadCreator(...args as any),
  });
  actionCreator.TYPE = type;
  actionCreator.toString = () => type;

  return actionCreator;
}
