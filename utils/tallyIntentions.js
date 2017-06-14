module.exports = function(results) {
	results = results.map(result => {
		result['intentionTally'] = {'非常同意':0, '同意':0, '無意見':0, '不同意':0, '非常不同意':0}
		for (let prop in result['intentions']) {
			result['intentionTally'][result['intentions'][prop]]++
		}
		return result
	})
	return results
}