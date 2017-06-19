{
  const fs        = require('fs')
        promisify = require('./utils/general-utils').promisify
        prf       = promisify(fs.readFile)
        pwf       = promisify(fs.writeFile)
        pUtils    = require('./utils/parser-utils')

  module.exports = fileName => {
    return prf(fileName, 'utf8')
      .then(raw => pUtils(raw))
      .catch(err => console.log('err in parser'))
  }
}
