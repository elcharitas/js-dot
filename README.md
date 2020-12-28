<h1 align="center">Welcome to js-dot 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/elcharitas/js-dot#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/elcharitas/js-dot/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/elcharitas/js-dot/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/elcharitas/js-dot" />
  </a>
  <a href="https://twitter.com/elcharitas" target="_blank">
    <img alt="Twitter: elcharitas" src="https://img.shields.io/twitter/follow/elcharitas.svg?style=social" />
  </a>
</p>

> JavaScript dot notation handler

### 🏠 [Homepage](https://github.com/elcharitas/js-dot#readme)

## Install

```sh
$ npm i -D js-dot
```

## Usage

```js
const jsDot = require('jsdot')

const data = {
  foo: {
    "bar": {
      "sample": "jsDot"
    }
  }
}

// ======== Get Data ========
jsDot.get(data, "foo.bar.sample") // outputs "jsDot"
// ---- or -----
data.dot("foo.bar.sample") // outputs "jsDot"

// ======== Get Data with default ========
jsDot.get(data, "foo.nofoo", "foo") // outputs "foo"

// ======== Set Data ========
jsDot.set(data, "foo.bar", "bar")
// ----- or ------
data.dot("foo.bar", "bar")
console.log(data.foo.bar.sample) // undefined

```

## Author

👤 **Jonathan Irhodia**

* Website: elcharitas.com.ng
* Twitter: [@elcharitas](https://twitter.com/elcharitas)
* Github: [@elcharitas](https://github.com/elcharitas)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/elcharitas/js-dot/issues). You can also take a look at the [contributing guide](https://github.com/elcharitas/js-dot/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jonathan Irhodia](https://github.com/elcharitas).<br />
This project is [MIT](https://github.com/elcharitas/js-dot/blob/master/LICENSE) licensed.

***