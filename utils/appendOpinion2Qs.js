module.exports = function (results) {
	let intentionQs = results.filter((data, indx) => indx % 2 === 0),
		opionQs = results.filter((data, indx) => indx % 2 !== 0)
	results = intentionQs.map((q, indx, arr) => {
		q['opionions'] = opionQs[indx]
		delete q['opionions']['question']
		return q
	})
	return results
}