/**
 * Подсчитывает проценты соответствующие долям в массиве
 * @param array Входной массив в долями
 * @returns array - массив процентов
 */
function percentage(array){
	if(!Array.isArray(array)){
		throw new Error('arg must be an array');
	}
	if(array.length > 999999){
	 	throw new Error('so big array');
	}
	const summ = arraySumm(array);
	return array.map((current)=>{
		return (current/summ*100).toFixed(3);
	});
}
/**
 * Считает сумму элементов массива
 * @param array - Входной массив
 * @return float - сумма
 */
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