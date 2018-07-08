const assert = require('assert');
const percentage = require('./percentage').percentage;
const arraySumm = require('./percentage').arraySumm;


describe("arraySumm", function() {
	
	describe("считает сумму элементов массива", function() {
		function makeTest(array) {
			let expected = 0;
			for(let elem of array){
				expected += parseFloat(elem)
			}
			it("сумма значений массива " + array.join(', ') + " результат: " + expected, function() {
				assert.equal(arraySumm(array), expected);
			});
		}
		
		for (let x = 1; x <= 5; x++) {
			let testArray = getRandomArray();
			makeTest(testArray)
		}
	});
	
	it("при содержании в массиве нечисла выдает ошибку", function() {
		assert.throws(() => arraySumm([1,'aa',2.5]),Error)
	});
});

describe("percentage", function() {
	it("при содержании в массиве нечисла выдает ошибку", function() {
		assert.throws(() => percentage([1,'aa',2.5]),Error)
	});
	it("если аргумент не массив выдает ошибку", function() {
		assert.throws(() => percentage('aa'),Error)
	});
	describe("перевод долей в проценты", function() {
		const array = ['1.5', '3', '6', '1.5'];
		const expected = ['12.500', '25.000','50.000','12.500'];
		it("массив долей " + array.join(', ') + "  результат: " + expected.join(', '), function() {
			assert.deepEqual(percentage(array), expected);
		});
	});
});
console.log(percentage)
function getRandomArray() {
	let testArray = [];
	for(let i=0;i<Math.floor(Math.random() * (100 - 1)) + 1;i++){
		testArray[i] = (Math.random() * (100 - 1) + 1).toFixed(1)
	}
	return testArray;
}
