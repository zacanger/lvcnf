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
  const c = new Conf({ a: 1 })
  c.overwrite({ b: 1 })
  t.equal(c.get('a'), undefined, 'overwrite overwrites')
  t.equal(c.get('b'), 1, 'overwrite works')
  const d = new Conf({ a: 1, b: 2 })
  d.merge({ b: 3 })
  t.equal(d.get('a'), 1, 'merge does not delete')
  t.equal(d.get('b'), 3, 'merge merges')
  t.end()
})
