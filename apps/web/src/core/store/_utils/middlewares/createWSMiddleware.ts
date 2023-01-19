import { Middleware, Store } from 'redux';
import { io, Socket } from 'socket.io-client';

import {
  IAction,
  IActionType,
  IPayloadActionCreator,
  IPayloadAction,
} from '../types';

function isActionCreator(handler: IWSHandler): handler is IWSActionHandler {
  return typeof handler === 'function' && 'TYPE' in handler;
}

export function createWSMiddleware({
  connectionUrl,
  actions,
  handlers,
}: IWSMiddlewareParams): Middleware {
  return store => {
    let socket: Socket | null;

    function connect() {
      if (socket) {
        disconnect();
      }

      socket = io(connectionUrl);
    }

    function disconnect() {
      socket?.disconnect();
      socket = null;
    }

    function bindHandlers() {
      if (!socket) {
        return;
      }

      Object
        .entries(handlers)
        .map(([handlerName, handler]) => {
          socket?.on(handlerName, data => {
            if (isActionCreator(handler)) {
              store.dispatch(handler(data));
            } else {
              handler(store as Store, data);
            }
          });
        });
    }

    function emitMessage(type: string, data: any) {
      socket?.emit(type, data);
    }

    return next => action => {
      if (action.type === actions.CONNECT.TYPE) {
        connect();
        bindHandlers();
      }

      if (action.type === actions.DISCONNECT.TYPE) {
        disconnect();
      }

      if (action.type === actions.EMIT.TYPE) {
        const { wsType, wsData } = action.payload;
        emitMessage(wsType, wsData);
      }

      next(action);
    };
  };
}

export interface IWSEmit {
  type: string;
  data: any;
}

interface IWSMiddlewareParams {
  connectionUrl: string;
  actions: IWSActions;
  handlers: IWSHandlers;
}

interface IWSActions {
  CONNECT: ((...args: any) => IAction<string>) & IActionType<string>;
  DISCONNECT: ((...args: any) => IAction<string>) & IActionType<string>;
  EMIT: ((...args: any) => IPayloadAction<string, IWSEmit>) & IActionType<string>;
}

interface IWSHandlers {
  [wsAction: string]: IWSHandler | IWSActionHandler;
}

type IWSHandler = (dispatch: Store, data: any) => void;
type IWSActionHandler = IPayloadActionCreator<string, any>;
