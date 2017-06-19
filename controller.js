{
  const fs = require('fs')
        pfwtchcb = require('./utils/controller-utils').pfwtchcb
        pfwrtcb = require('./utils/controller-utils').pfwrtcb
        promisify = require('./utils/general-utils').promisify
        pfwtch = promisify(fs.watch, pfwtchcb)
        pfwrt = promisify(fs.writeFile, pfwrtcb)
        src = './src/src.csv'
        parser = require('./parser')

  pfwtch(src)
    .then(() => parser(src))
    .then(collection => JSON.stringify(collection))
    .then(dataStr => pfwrt('./dist/data.js', dataStr))
    .catch(err => console.log('err in controller'))
}
