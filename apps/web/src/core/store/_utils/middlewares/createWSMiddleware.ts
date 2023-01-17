import { Middleware, Dispatch } from 'redux';
import { io, Socket } from 'socket.io-client';

export function createWSMiddleware({
  connectionUrl,
  actions,
  handlers,
}: ICreateWSMiddlewareParams): Middleware {
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
          socket?.on(handlerName, data => handler(store.dispatch, data));
        });
    }

    function sendMessage(eventType: string, eventData: any) {
      socket?.send(eventType, eventData);
    }

    return next => action => {
      if (action.type === actions.connect) {
        connect();
        bindHandlers();
      }

      if (action.type === actions.disconnect) {
        disconnect();
      }

      if (action.type === actions.message) {
        const { eventType, eventData } = action.payload;
        sendMessage(eventType, eventData);
      }

      next(action);
    };
  };
}

interface ICreateWSMiddlewareParams {
  connectionUrl: string;
  actions: IWSActions;
  handlers: IWSHandlers;
}

interface IWSActions {
  connect: string;
  disconnect: string;
  message: string;
}

interface IWSHandlers {
  [wsAction: string]: IWSHandler;
}

type IWSHandler = (dispatch: Dispatch, data: any) => void;
