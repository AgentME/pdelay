# pdelay

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AgentME/pdelay/blob/master/LICENSE.txt) [![npm version](https://img.shields.io/npm/v/pdelay.svg?style=flat)](https://www.npmjs.com/package/pdelay) [![CircleCI Status](https://circleci.com/gh/AgentME/pdelay.svg?style=shield)](https://circleci.com/gh/AgentME/pdelay) [![Greenkeeper badge](https://badges.greenkeeper.io/AgentME/pdelay.svg)](https://greenkeeper.io/)

```
pdelay(time, value)
```

This function returns a promise that resolves with a given value after a set
amount of time.

```js
const pdelay = require('pdelay');

pdelay(2000, 'two seconds later').then(value => {
  console.log('got value', value);
});
```

The value parameter may be omitted, and the Promise will resolve to
`undefined`.

## Types

[Flow](https://flowtype.org/) type declarations for this module are included!
If you are using Flow, they won't require any configuration to use.
