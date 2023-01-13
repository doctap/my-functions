class Range {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}

	has(x) {
		return typeof x === "number" && this.from <= x && x <= this.to;
	}

	[Symbol.iterator]() {

		let next = Math.ceil(this.from);
		let last = this.to;

		return {
			next() {
				return (next <= last) ? { value: next++ } : { done: true };
			},

			[Symbol.iterator]() {
				return this;
			}
		}
	}
}

console.log([...new Range(1, 10)])
console.log(new Range(1, 10).has(3))