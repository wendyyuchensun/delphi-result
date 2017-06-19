(() => {
  const r        = require('./general-utils').r
        addProps = require('./general-utils').addProps
        ap       = Array.prototype
        rPush    = r('push')
        rShift   = r('shift')
        rPop     = r('pop')

  const transpose = function () {
    return this[0].map((col, i) => {
      return this.map(row => row[i])
    })
  }

  Object.prototype.addProps = addProps

  const toObj = function ()  {
    return this.reduce((obj, v, i) => {
      obj.addProps(`${i + 1}`, v)
      return obj
    }, {})
  }

  ap.addProps({rPush, rShift, rPop, transpose, toObj})

  function addSecNo () {
    let sec = 1, lastNo
    return (target, d) => {
      let q  = d.question
          no = parseInt(q)
      d.question = q.replace(/^\d+\-\d+\s/, '')
      if (lastNo && no < lastNo) sec++
      target[sec] = target[sec] || {}
      target[sec][no] = d
      lastNo = no
      return target
    }
  }

  function pUtils (raw) {
    let aux = raw.split('\r\n').map(row => row.split(',').rShift().rPop()),
        qs = aux.shift().filter((row, i) => i % 2 === 0)
    aux = aux.transpose().map(row => row.toObj())
    return qs.map((q, i) => {
      return {question: q, answers: aux[i * 2], opinions: aux[i * 2 + 1] || null}
    }).reduce(addSecNo(), {})
  }

  module.exports = pUtils
})()
