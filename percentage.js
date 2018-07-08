function percentage(array){
	if(!Array.isArray(array)){
		throw new Error('arg must be an array');
	}
	const summ = arraySumm(array);
	return array.map((current)=>{
		return (current/summ*100).toFixed(3);
	});
}
function arraySumm(array) {
	return array.reduce((sum, current) => {
		current = parseFloat(current);
		if( isNaN(current) ){
			throw new Error('array contains invalid element');
		}
		return parseFloat(sum) + parseFloat(current)
	});
}

module.exports = {
	percentage,
	arraySumm
};