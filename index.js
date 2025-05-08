// Problem 01
// function formatString(input: string, toUpper?: boolean): string {
// 	if (toUpper || toUpper === undefined) {
// 		return input.toUpperCase()
// 	} else {
// 		return input.toLowerCase()
// 	}
// }
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce(function (max, product) {
        return product.price > max.price ? product : max;
    });
}
// Example Usage:
var products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 500 },
];
console.log(getMostExpensiveProduct(products)); // Output: { name: "Laptop", price: 1200 }
console.log(getMostExpensiveProduct([]));
