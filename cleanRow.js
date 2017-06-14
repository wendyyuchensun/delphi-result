module.export = function (data) {
  return Promise.resolve(data.forEach(cleanRow))
}

function cleanRow (dataRow) {
  dataRow.shift()
  dataRow.pop()
}
