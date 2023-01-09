'use strict'

/**
 * Реверс только тех слов в строке, которые имеют пять или более символов
 * @param {Строка слов} str 
 * @returns Строка слов
 */
function spinWords(str) {
	return str.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
}
//// TESTS
// console.log(spinWords("Hey fellow warriors"), "| Hey wollef sroirraw");
// console.log(spinWords("This is another test"), "| This is rehtona test");
// console.log(spinWords("Just kidding there is still one more"), "| Just gniddik ereht is llits one more"); 

/**
 * Находит все делители числа и возвращает их, кроме 1 и самого числа
 * @param {Целое число} integer 
 * @returns Массив всех делителей
 */
function divisors(integer) {
	const result = [];
	for (let i = 2; i < integer; i++) {
		if (integer % i === 0) result.push(i);
	}
	return result.length === 0 ? `${integer} is prime` : result;
};
//// TESTS
// console.log(divisors(12), 'should return [2,3,4,6]');
// console.log(divisors(25), 'should return [5]');
// console.log(divisors(13), 'should return 13 is prime');

/**
 * Проверяет есть ли в строке одинаковые символы
 * @param {строка} str 
 * @returns boolean
 */
function isIsogram(str) {
	if (str === '') return true;
	let S = str.toLowerCase();
	let Num = 0;

	for (let letter of S) {
		S.indexOf(letter) === Num ? Num++ : Num = false;
	}

	if (!Num) return false;
	if (Num - Num === 0) return true;
}
//// TESTS
// console.log(isIsogram("Dermatoglyphics"), `"Dermatoglyphics" --> true`)
// console.log(isIsogram("aba"), `"aba" --> false`);
// console.log(isIsogram("moOse"), `"moOse" --> false (ignore letter case)`);

/**
 * Функция принимает число и возвращает сумму чисел которые кратны 3 или 5
 * Пример в числе 10 кратные 3 или 5 => это 3,5,6,9 их сумма 23
 * @param {number} num 
 * @returns number
 */
function solution(num) {
	let sum = 0;

	for (let i = 3; i < num; i++) {
		if (i % 3 === 0 || i % 5 === 0) sum += i;
	}
	return sum;
}
////TEST
// console.log(solution(10), return 23)




//////#################################################-------7 KYU (MY Level CodeWars)

// function zero() {}
// function one() {}
// function two() {}
// function three() {}
// function four() {}
// function five() {}
// function six() {}
// function seven() {}
// function eight() {}
// function nine() {}

// function plus() {}
// function minus() {}
// function times() {}
// function dividedBy() {}

// function zero(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '0' + str : '0'));
// }

// function one(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '1' + str : '1'));
// }

// function two(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '2' + str : '2'));
// }

// function three(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '3' + str : '3'));
// }

// function four(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '4' + str : '4'));
// }

// function five(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '5' + str : '5'));
// }

// function six(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '6' + str : '6'));
// }

// function seven(str) { 
// 	return Math.trunc(eval((typeof str === 'string') ? '7' + str : '7'));
// }

// function eight(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '8' + str : '8'));
// }

// function nine(str) {
// 	return Math.trunc(eval((typeof str === 'string') ? '9' + str : '9'));
// }


// function plus(func) {
// 	return '+' + func;
// }

// function minus(func) {
// 	return '-' + func;
// }

// function times(func) {
// 	return '*' + func;
// }

// function dividedBy(func) {
// 	return '/' + func;
// }

// console.log(three(minus(three())))

// ------------------------------

/**
 * Строка с дефисами или подчеркиваниями
 * @param {строка} str 
 * @returns строку в виде шрифта camelCase
 */
function toCamelCase(str) {
	const arr = [...str];

	arr.forEach((cur, i) => {
		if (cur === '-' || cur === '_') {
			arr.splice(i, 1);
			arr[i] = arr[i].toUpperCase();
		}
	})

	return arr.join('');
}

// console.log(toCamelCase("the_stealth_warrior"))
// console.log(toCamelCase("the-stealth-warrior"))

// ----------------------------------

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

/**
 * недоделанная функция, находящая квадратный корень в массиве array1 относительно чисел массива array2
 * @param {number[]} array1 
 * @param {number[]} array2 
 * @returns boolean
 */
function comp(array1, array2) {
	if (!(array1 && array2) || !(array1 || array2)) return undefined;

	if (array1.length === array2.length)
		return array2.every(
			el => array1.some(sqrt => sqrt === Math.sqrt(el))
		);
	return false;
}

// console.log(comp(a, b))

//---------------------------------------------

/**
 * функция принимает строку секунд и возвращает подсчитанные (ЧЧ:ММ:СС) *максимальные значения (99:59:59)
 * @param {number} seconds 
 * @returns string
 */
function humanReadable(seconds) {
	let h = seconds / 3600;
	let m = (seconds - (Math.trunc(h) * 3600)) / 60;
	let s = seconds - ((Math.trunc(m) * 60) + (Math.trunc(h) * 3600));

	return [h, m, s].map(v => v < 10 ? '0' + Math.trunc(v) : Math.trunc(v)).join(':');
}

// console.log(humanReadable(359999))


//////#################################################-------6 KYU (MY Level CodeWars)

/**плохой алгоритм
 * функция принимает строку с круглыми скобками скобками и возвращает true если в этой строке у каждой скобки есть пара
 * @param {string} parens 
 * @returns boolean
 */
function validParentheses(parens) {
	let pairs = [];
	if (parens === '') return true;
	if (parens[0] === '(' && parens) {
		[...parens].forEach(v => {
			(v === '(') ? (pairs.push([v])) : (pairs.find(a => a.length === 1)) ? (pairs.find(a => a.length === 1).push(v)) : (pairs.push([v]))
		})
		return pairs.every(ar => ar[0] === '(' && ar[1] === ')')
	}
	return false;
}

// console.log(validParentheses("()))"), false)
// console.log(validParentheses("(())((()())())"), true)
// console.log(validParentheses("((())((()())())"), false)
// console.log(validParentheses("())"), false)
// console.log(validParentheses(""), false)

//-------------------------------------------------

/**
 * Возвращает массив массивов определенной длины указанной в @param splitter
 * @param {any[]} a 
 * @param {number} splitter 
 * @returns a[][]
 */
function getMatrix(a, splitter) {
	let matrix = [], i, k;

	for (i = 0, k = -1; i < a.length; i++) {
		if (i % splitter === 0) {
			k++;
			matrix[k] = [];
		}
		matrix[k].push(a[i])
	}
	return matrix;
}

console.log(getMatrix([1, 2, 3, 4, 6, 23, 2, 12, 3, 54, 6], 2))