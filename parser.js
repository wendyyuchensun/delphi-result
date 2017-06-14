const fs       = require('fs'),
      splitRow = require('./utils/splitRow'),
      splitCol = require('./utils/splitCol'),
      cleanRow = require('./utils/cleanRow'),
      separateLasteQ = require('./utils/separateLastQ')

fs.readFile('./src/201706141111.csv', 'utf8', (err, data) => {
  let results = [],
      lastQ = {},
      secs = ['學務', '教務', '治理']

  new Promise ((res, rej) => {
    if (err) throw err
    else res(data)
  }).then(splitRow)
    .then(splitCol)
    .then(cleanRow)
    .then(data => {
      separateLasteQ(data, lastQ)
      return data
    })
    .then(makeQuestionObj)
    .then(tallyAnswer)
    .then(tallyOpinion)
    .then(analyseIntention)
    .then(result => {
      result[result.length + 1] = lastQ
      return result
    })
    .then(result => console.log(result))
    .catch(e => console.log(e))
})
