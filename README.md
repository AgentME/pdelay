# pdelay

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Macil/pdelay/blob/master/LICENSE.txt) [![npm version](https://img.shields.io/npm/v/pdelay.svg?style=flat)](https://www.npmjs.com/package/pdelay) [![CircleCI Status](https://circleci.com/gh/Macil/pdelay.svg?style=shield)](https://circleci.com/gh/Macil/pdelay) [![Greenkeeper badge](https://badges.greenkeeper.io/Macil/pdelay.svg)](https://greenkeeper.io/)

```
pdelay(time, value)
```

This function returns a promise that resolves with a given value (optional)
after a set amount of time (in milliseconds).

```js
import pdelay from 'pdelay';

async function doStuff() {
  console.log('about to wait one second...');
  await pdelay(1000);
  console.log('done waiting');
}

pdelay(2000, 'two seconds later').then(value => {
  console.log('got value', value);
});
```

The value parameter may be omitted, and the Promise will resolve to
`undefined`.

## Types

Both [TypeScript](https://www.typescriptlang.org/) and
[Flow](https://flowtype.org/) type definitions for this module are included!
The type definitions won't require any configuration to use.
