declare module "pdelay" {
  export default function delay<T>(time: number, value?: Promise<T> | T): Promise<T>;
}
