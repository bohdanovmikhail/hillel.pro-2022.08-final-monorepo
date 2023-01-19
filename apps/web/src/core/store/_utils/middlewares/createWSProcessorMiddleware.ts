

export function createWSProcessorMiddleware({

}: IWSProcessorMiddlewareParams) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return store => next => action => {
    next(action);
  };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IWSProcessorMiddlewareParams {

}
