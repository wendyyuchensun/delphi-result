module.exports = function (data, lastQ) {
  lastQ.question = data[0].pop()
  lastQ.answer = {}
  data.forEach((dataRow, indx) => {
    if (indx > 0) {
      let answer = dataRow.pop()
      lastQ.answer[indx] = answer === ''? '(未填寫)':answer
    }
  })
}
