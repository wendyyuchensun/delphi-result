(() => {
  function promisify(fn, cb = dpcb) {
    return function () {
      return new Promise((res, rej) => {
        fn(...arguments, pcbg(cb, res, rej))
      })
    }
  }

  function pcbg (cb, res, rej) {  // promise callback generator
    return cb(res, rej)
  }

  function dpcb (res, rej) { // default promise callback
    return (err, data) => {
      if (err) {
        rej(err)
        return
      }
      res(data)
    }
  }

  function r (fnName) {
    return function () {
      this[fnName](...arguments)
      return this
    }
  }

  function addProps () {
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
      let that = this, arg = arguments[0]
      Object.keys(arg).forEach(function (p) {
        this[p] = arg[p]
      }, that)
    } else if (arguments.length === 2 && typeof arguments[0] === 'string') {
      this[arguments[0]] = arguments[1]
    } else {
      throw new Error
    }
  }

  module.exports = {promisify, r, addProps}
})()
