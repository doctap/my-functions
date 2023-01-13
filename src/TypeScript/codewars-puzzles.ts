
/**
 * получить сумму между двух данных чисел, числа можно передавать в функцию в любой последовательности
 * @param a 
 * @param b 
 * @returns sum
 */
export const getSum = (a: number, b: number): number => {
	if (b === a) {
		return a
	} else {
		return a < b ? b + getSum(a, b - 1) : a + getSum(a - 1, b)
	}
}