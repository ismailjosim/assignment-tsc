// Problem 01
// function formatString(input: string, toUpper?: boolean): string {
// 	if (toUpper || toUpper === undefined) {
// 		return input.toUpperCase()
// 	} else {
// 		return input.toLowerCase()
// 	}
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// function processValue(value: string | number): number {
// 	if (typeof value === 'string') {
// 		return value.length
// 	} else {
// 		return value * 2
// 	}
// }
// Problem 06
// interface Product {
// 	name: string
// 	price: number
// }
// function getMostExpensiveProduct(products: Product[]): Product | null {
// 	if (products.length === 0) return null
// 	return products.reduce((max, product) =>
// 		product.price > max.price ? product : max,
// 	)
// }
// Problem 07
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Sunday ? 'Weekend' : 'Weekday';
}
// Problem 08
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (n < 0) {
                            reject(new Error('Negative number not allowed'));
                        }
                        else {
                            resolve(n * n);
                        }
                    }, 1000);
                })];
        });
    });
}
// Example Usage:
squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-3).catch(console.error); // Output after 1s: Error: Negative number not allowed
