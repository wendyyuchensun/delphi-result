{
  const fs  = require('fs')
        promisify = require('./utils/general-utils').promisify
        prf       = promisify(fs.readFile)
        pwf       = promisify(fs.writeFile)
        parser    = require('./utils/parser-utils').parser

  prf('./src/201706141111.csv', 'utf8')
    .then(raw => parser(raw))
    .then((collection) => console.log(collection))
    .catch(err => console.log(err))
}
