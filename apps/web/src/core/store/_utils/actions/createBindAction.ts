export function createBindAction(actionCreator: any, ...bindArgs: any) {
  return (...args: any) => actionCreator(...bindArgs, ...args);
}
