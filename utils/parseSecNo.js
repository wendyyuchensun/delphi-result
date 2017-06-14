module.exports = function (results) {
	let sec = 1, lastNo
	let newResults = results.map(data => {
		let no = parseInt(data.question)
		if (lastNo && no < lastNo) {
			data['sec'] = ++sec
		} else {
			data['sec'] = sec
		}
		data['no'] = no
		lastNo = no
		data.question = data.question.replace(/\d\-\d\s/, '')
		return data
	})
	return newResults
}