# lvcnf

A library for live configuration changes.

--------

## Installation

`npm i lvcnf`

## Usage

```javascript
const Conf = require('lvcnf')

const config = new Conf(initialConfig)

config.get('foo.bar.baz')
config.set('foo.bar.baz.quux', 'whatever')
config.delete('foo.bar')
config.merge(someNewConfigObject) // merges with current config
config.overwrite(someNewConfigObject) // overwrites
config.get() // => all config
```

## License

[MIT](./LICENSE.md)
