/* @flow */
/* eslint-disable no-unused-vars */

const sinon = require('sinon');
const assert = require('assert');
import delay from '../src';

describe('delay', function() {
  it('delays', function(cb) {
    this.slow(500);

    const spy = sinon.spy();
    delay(100, 'foo').then(spy);
    setTimeout(() => {
      assert(spy.notCalled);
      setTimeout(() => {
        assert.deepStrictEqual(spy.args, [
          ['foo']
        ]);
        cb();
      }, 100);
    }, 50);
  });

  it('type-checks with value', function() {
    return delay(10, {a: 123}).then(x => {
      assert.deepStrictEqual(x, {a: 123});

      const good: {a: number} = x;
      //$ExpectError
      const bad: number = x;
    });
  });

  it('type-checks with promise', function() {
    return delay(10, Promise.resolve({a: 123})).then(x => {
      assert.deepStrictEqual(x, {a: 123});

      const good: {a: number} = x;
    });
  });

  it('can pass rejection', function() {
    const p = Promise.reject({a: 456});

    // catch error so node doesn't detect it as an unhandled promise
    p.catch(() => {});

    return delay(10, p).then(x => {
      throw new Error('Should not happen');
    }, err => {
      assert.deepStrictEqual(err, {a: 456});
    });
  });
});
