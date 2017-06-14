const fs       = require('fs'),
      splitRow = require('./utils/splitRow'),
      splitCol = require('./utils/splitCol'),
      cleanRow = require('./utils/cleanRow'),
      separateLasteQ = require('./utils/separateLastQ'),
      makeQAObj = require('./utils/makeQAObj'),
      parseSecNo = require('./utils/parseSecNo'),
      appendOpinion2Qs = require('./utils/appendOpinion2Qs'),
      restructureIntention = require('./utils/restructureIntention'),
      tallyIntentions = require('./utils/tallyIntentions')

fs.readFile('./src/201706141111.csv', 'utf8', (err, data) => {
  let results = [],
      lastQ = {sec: 4, no: 1}

  new Promise ((res, rej) => {
    if (err) throw err
    else res(data)
  }).then(splitRow)
    .then(splitCol)
    .then(cleanRow)
    .then(data => {
    	separateLasteQ(data, lastQ)	// remove last col of every row and save them in lasQ
    	return data
    })
    .then(data => {
    	makeQAObj(data, results)
    	return results
    })
    .then(results => {
    	return appendOpinion2Qs(results)
    })
    .then(parseSecNo)
	.then(restructureIntention)
	.then(tallyIntentions)
	.then(results => {
		results.push(lastQ)
    	return results
    })
    .then(results => console.log(results))
    .catch(e => console.log(e))
})
