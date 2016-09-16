# pdelay

[![Circle CI](https://circleci.com/gh/AgentME/pdelay.svg?style=shield)](https://circleci.com/gh/AgentME/pdelay)
[![npm version](https://badge.fury.io/js/pdelay.svg)](https://badge.fury.io/js/pdelay)

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
