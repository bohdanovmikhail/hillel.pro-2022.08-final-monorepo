// Actions
export interface IActionType<T> {
  TYPE: T;
}

export interface IAction<T extends string> {
  type: T;
}

export interface IPayloadAction<T extends string, P> extends IAction<T> {
  payload: P;
}

export interface IErrorAction<T extends string, E> extends IAction<T> {
  error: E;
}

// Action creators
export type IActionCreator<
  T extends string,
> = (() => IAction<T>) & IActionType<T>;

export type IPayloadActionCreator<
  T extends string,
  P,
> = ((payload: P) => IPayloadAction<T, P>) & IActionType<T>;

export type IErrorActionCreator<
  T extends string,
  E,
> = ((error: E) => IErrorAction<T, E>) & IActionType<T>;

export type IPayloadActionWithCreator<
  P extends ReturnType<PC>,
  T extends string = string,
  PC extends IAnyFn = IAnyFn,
  Args extends Parameters<PC> = Parameters<PC>,
> = ((...args: Args) => IPayloadAction<T, P>) & IActionType<T>;

// Other
export type IAnyFn = (...args: any) => any;
