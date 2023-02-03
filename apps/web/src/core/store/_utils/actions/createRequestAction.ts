import { Dispatch } from 'redux';

import {
  IActionCreator,
  IPayloadActionCreator,
  IErrorActionCreator,
} from '../types';

import { createAction } from './createAction';
import { createPayloadAction } from './createPayloadAction';
import { createErrorAction } from './createErrorAction';

export function createRequestAction(
  type: string,
  handler: (...args: any) => Promise<any>,
  params?: IRequestActionParams<any>,
) {
  const startActionCreator = params?.startActionCreator || createAction(`${type}:START`);
  const successActionCreator = params?.successActionCreator || createPayloadAction(`${type}:SUCCESS`);
  const errorActionCreator = params?.errorActionCreator || createErrorAction(`${type}:ERROR`)

  actionCreator.START_TYPE = startActionCreator.TYPE;
  actionCreator.SUCCESS_TYPE = successActionCreator.TYPE;
  actionCreator.ERROR_TYPE = errorActionCreator.TYPE;

  return actionCreator;

  function actionCreator(...data: any) {
    return async (dispatch: Dispatch) => {
      dispatch(startActionCreator());

      try {
        const response = await handler(data);
        const successAction = successActionCreator(response);

        dispatch(successAction);
      } catch (err) {
        const errorAction = errorActionCreator(err as Error);

        dispatch(errorAction);
      }
    };
  }
}

interface IRequestActionParams<P> {
  startActionCreator?: IActionCreator;
  successActionCreator?: IPayloadActionCreator<P>;
  errorActionCreator?: IErrorActionCreator<Error>;
}
