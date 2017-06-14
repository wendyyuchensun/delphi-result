module.exports = function (data, results) {
	data.forEach((dataRow, rowIndx) => {
		dataRow.forEach((data, colIndx) => {
			results[colIndx] = results[colIndx] || {}
			results[colIndx][rowIndx == '0'? 'question':rowIndx] = (data === '') || (data === '無')? '(未填寫)':data
		})
	})
}