export type IpcService<T> = {
  [P in keyof T]: (...args: any[]) => any;
};
