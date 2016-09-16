/* @flow */

export default function delay<T>(time: number, value: Promise<T> | T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}
