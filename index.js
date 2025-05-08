// Problem 01
// function formatString(input: string, toUpper?: boolean): string {
// 	if (toUpper || toUpper === undefined) {
// 		return input.toUpperCase()
// 	} else {
// 		return input.toLowerCase()
// 	}
// }
// Problem 02
// function filterByRating(
// 	items: { title: string; rating: number }[],
// ): { title: string; rating: number }[] {
// 	const matching = items.filter(
// 		(item: { title: string; rating: number }) => item.rating >= 4,
// 	)
// 	return matching
// }
// Problem 03
// function concatenateArrays<T>(...arrays: T[][]): T[] {
// 	// return arrays.flat()
// 	return arrays.reduce((acc, cur) => acc.concat(cur), [])
// }
// problem 04
// class Vehicle {
// 	private make: string
// 	private year: number
// 	constructor(make: string, year: number) {
// 		this.make = make
// 		this.year = year
// 	}
// 	getInfo(): string {
// 		return `Make: ${this.make}, Year: ${this.year}`
// 	}
// }
// class Car extends Vehicle {
// 	private model: string
// 	constructor(make: string, year: number, model: string) {
// 		super(make, year)
// 		this.model = model
// 	}
// 	getModel(): string {
// 		return `Model: ${this.model}`
// 	}
// }
// Problem 05
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}
console.log(processValue('Hello'));
console.log(processValue(10));
