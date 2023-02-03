// Actions
export interface IActionType<
  Type extends string = string,
> {
  TYPE: Type;
}

export interface IRequestActionType<
  Start extends string = string,
  Success extends string = string,
  Error extends string = string,
> {
  START_TYPE: Start;
  SUCCESS_TYPE: Success;
  ERROR_TYPE: Error;
}

export interface IAction<
  Type extends string = string,
> {
  type: Type;
}

export interface IPayloadAction<
  Payload,
  Type extends string = string,
> extends IAction<Type> {
  payload: Payload;
}

export interface IErrorAction<
  Error,
  Type extends string = string,
> extends IAction<Type> {
  error: Error;
}

// Action creators
export type IActionCreator<
  Type extends string = string,
> = (() => IAction<Type>) & IActionType<Type>;

export type IPayloadActionCreator<
  Payload,
  Type extends string = string,
> = ((payload: Payload) => IPayloadAction<Payload, Type>) & IActionType<Type>;

export type IErrorActionCreator<
  Error,
  Type extends string = string,
> = ((error: Error) => IErrorAction<Error, Type>) & IActionType<Type>;

export type IPayloadActionWithCreator<
  Payload extends ReturnType<PayloadCreator>,
  Type extends string = string,
  PayloadCreator extends IAnyFn = IAnyFn,
  Args extends Parameters<PayloadCreator> = Parameters<PayloadCreator>,
> = ((...args: Args) => IPayloadAction<Payload, Type>) & IActionType<Type>;

export type IAnyActionCreator<
  Payload,
> = IActionCreator
  | IPayloadActionCreator<Payload>
  | IErrorActionCreator<Payload>
  | IPayloadActionWithCreator<Payload>;

// export type IRequestActionCreator<
//   Payload extends ReturnType<PayloadRequest>,
//   Type extends string = string,
//   PayloadRequest extends IAnyFn<Promise<Payload>> = IAnyFn<Promise<Payload>>,
//   Args extends Parameters<PayloadRequest> = Parameters<PayloadRequest>,
// > = ((...args: Args) => void) & IRequestActionType;

// Other
export type IAnyFn<Result = any> = (...args: any) => Result;
