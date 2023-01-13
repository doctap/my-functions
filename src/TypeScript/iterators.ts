const obj = {
	0: 123,
	1: 456,
	2: 678,
	3: 890,
	*[Symbol.iterator]() {
		for (const e of Object.values(this)) yield e;
	}
}

console.log([...obj])