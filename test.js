const Conf = require('.')
const tape = require('tape')

tape.test('lvcnf', (t) => {
  const a = new Conf()
  t.deepEqual(a.get(), {}, 'init without config is fine')
  a.set('foo.bar', 'baz')
  t.equal(a.get('foo.bar'), 'baz', 'deep set without existing obj works')
  const b = new Conf({ a: 1, b: { c: { d: 2 } } })
  t.equal(b.get('b.c.d'), 2, 'deep get with init conf works')
  b.delete('a')
  t.equal(b.get('a'), undefined, 'delete works')
  t.end()
})
