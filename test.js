const test = require('tape');
const m  = require('./');

test('test', t => {
  t.plan(4);

  t.equal(m("30", 6), "000030");
  t.equal(m("30", 2), "30");
  t.equal(m("30", 1), "30");
  t.equal(m("30", -1), "30");
});
