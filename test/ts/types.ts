import pdelay from '../..';

// This file isn't executed. Typescript just checks it for type safety.
async function foo() {
  await pdelay(10);
  const x: string = await pdelay(10, 'abc');
  const y: string = await pdelay(10, Promise.resolve('abc'));
}
