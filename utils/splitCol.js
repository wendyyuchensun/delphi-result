module.exports = function (data) {
  return Promise.resolve(data.map(splitIndividualRow))
}

function splitIndividualRow (dataRow) {
  dataRow = dataRow.split(',')
  return dataRow
}
