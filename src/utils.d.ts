declare type DeepWritable<T> = {
  -readonly [P in keyof T]: T[P] extends {} ? DeepWritable<T[P]> : T[P];
};
