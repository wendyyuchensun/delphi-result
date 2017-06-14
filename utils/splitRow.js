module.exports = function splitRow (data) {
  return Promise.resolve(data.split('\r\n'))
}
