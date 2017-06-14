module.exports = function (data) {
  return Promise.resolve(data.map(cleanRow))
}

function cleanRow (dataRow) {
  dataRow.pop()
  dataRow.shift()
  return dataRow
}
