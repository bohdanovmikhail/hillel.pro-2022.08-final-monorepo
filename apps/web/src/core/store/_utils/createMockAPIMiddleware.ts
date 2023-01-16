import { Middleware } from 'redux';

export function createMockAPIMiddleware(): Middleware {

  return store => next => action => {
    next(action);
  };
}
