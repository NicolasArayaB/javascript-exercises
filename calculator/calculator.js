function add (a, b) {
	if (typeof a === "number" && typeof b === "number") {
		return a + b;
	}
}

function subtract (a, b) {
	if (typeof a === "number" && typeof b === "number") {
		return a - b;
	}
}

function sum (a) {
	let sum = 0;
	for (let i = 0; i < a.length; i++) {
		sum += a[i];
	};
	return sum;
}

function multiply (a) {
	let i = 0;
	let multi = a[i] * a[i+1];
	for (i = 2; i < a.length; i++) {
		multi = multi * a[i];
	};
	return multi;
}

function power(a, b) {
	let power = a;
	for (let i = 1; i < b; i++) {
		power *= a;
	};
	return power;	
}

function factorial(a) {
	let factorial = a;
	if (a == 0) {
		return 1;
	}
	for (let i = a-1; i > 0; i--){
		factorial *= i; 
	};
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}