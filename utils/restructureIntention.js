module.exports = function (results) {
	results = results.map(qObj => {
		qObj['intentions'] = {}
		for (let prop in qObj) {
			if (parseInt(prop)) {
				qObj['intentions'][prop] = qObj[prop]
				delete qObj[prop]
			}
		}
		return qObj
	})
	return results
}