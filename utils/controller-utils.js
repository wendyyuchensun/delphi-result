(() => {
  function pfwtchcb (res, rej) {
    return () => res()
  }

  function pfwrtcb (res, rej) {
    return err => {
      if (err) {
        rej(err)
        return
      }
      console.log('Done saving!')
      res()
    }
  }

  module.exports = {pfwtchcb, pfwrtcb}
})()
