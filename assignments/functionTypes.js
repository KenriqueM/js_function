// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number to a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertTostring(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

// my code Function Declaration

function addOne(n = 0) {
	return ++n;
}

// Function Expression 

let addOne = function addOneInput (n = 0) {
	return ++n
};

// Arrow Function without the curly braces

let addOne = n => ++n

// Arrow Function with Curly Braces

let addOne = n => {
	return ++n
};


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

// my code Function Declaration

function subtractOne(n = 0) {
	return --n;
}

// Function Expression 

let subtractOne = function subtractOneInput(n = 0) {
	return --n;
};

// Arrow Function without the Curly Braces 

let subtractOne = n => --n;

// Arrow Function with the Curly Braces

let subtractOne = n => {
	return --n
};


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//my code Function Declaration

function addNumbers( x = 0, y = 0 ) {
	if (typeof x == "number" && typeof y == "number") {
		return x + y;
	} else {
		alert("not a number");
	}
}

// Function Expression

let addNumbers = function addTwoNumbersInput( x = 0, y = 0 ) {
	if (typeof x == "number" && typeof y == "number") {
		return x + y;
	} else {
	(alert("not a number");
	}
};

// Arrow Function without the curly braces

let addNumbers = (x = 0, y = 0) => x + y;


// Arrow Function with the Curly Braces

let addNumbers = (x = 0, y = 0) => {
	return x + y;
};


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//my code Function Declaration

function subtractSecondNumberFromFirst ( x = 0, y = 0 ) {
 	if (typeof x == "number" && typeof y == "number") {
 		return y - x;	
 	} else {
 	 alert("not a number");
 	}
 }


// Function Expression

var subtractSecondNumberFromFirst = function ( x = 0, y = 0) {
	if (typeof x == "number" && typeof y == "number") {
		return y - x;
	} else {
		alert("not a number");
	}
};

// Arrow Function without the curly braces

let subtractSecondNumberFromFirst = (x = 0, y = 0) => y - x;


// Arrow Function with the Curly brackets

let subtractSecondNumberFromFirst = (x = 0, y = 0) => {
	return y - x;
};

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//my code Function Declaration 

 function multiplyTwoNumber(x = 0, y = 0) {
 	if (typeof x == "number" && typeof y == "number") {
 		return (x * y);	
 	} else {
 		alert("not a number");

 	}
 }

// Function Expression 

let multiplyTwoNumber = function multiplyTwoNumbersInput(x = 0, y = 0) {
	if (typeof x == "number" && typeof y == "number") {
		return x * y;
	} else {
		alert("not a nuumber");
	}
}

// Arrow Function without the Curly Braces

let multiplyTwoNumber = (x = 0, y = 0) => x * y;

// Arrow Function with the Curly Braces

let multiplyTwoNumber = (x = 0, y = 0) => {
	return (x * y);
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//my code Function Declaration

function divideSecondNumber( x = 0, y = 0 ) {
	if (typeof x == "number" && typeof == "number") {
		return y / x;
	} else {
		alert("not a number");
	}
}

// Function Expression

let divideSecondNumber = function secondNumber( x = 0, y = 0) {
	if (typeof x == "number" typeof == "number") {
		return y / x;
	} else {
		alert("not a number");
	}
};

// Arrow Function without the curly Brackets

let divideSecondNumber = (x = 0, y = 0) => y / x;

// Arrow with the curly brackets

let divideSecondNumber = (x = 0, y = 0) => {
	return y / x
};

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//my code Function Declaration

function multiplyNumberItself( x = 0) {
		return (x**2);
	}

// Function Expression 	

var multiplyNumberItself = function multiplyItself( x = 0) {
	return (x**2);
};

// Arrow Function without the curly brackets

var multiplyNumberItself = (x = 0) => x**2;

//Arrow Function without the Curly Brackets

var multiplyNumberItself = (x = 0) => {
	return x**2;
}


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

//my code Function Declaration

//let operation = "add", "subtract", "multiply", "divide";

function performMathOperation (x, y, operation) {
	if (operation == "+") {
		return x + y;
	} else if (operation == "-") {
		return x - y;
	} else if (operation == "*") {
		return x * y;
	} else if (operation == "/") {
		return x / y;
	} else {
		return "none";
	}
}


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

//my code Function Declaration 

function greaterOrLarger( a, b) {
	if (a > b) {
		return true;
} else {
	return false;
}
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

//my code Function Declaration

function performTrueFalse( a, b) {
	if (a < b) {
		return true; 
} else { 
		return false;
}
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

//my code Function Declaration

function equalNumbers( a = 0, b =0 ) {
	if (a == b) {
		return "the numbers are equal";
	} else {
		return "the numbers are not equal"
	}
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

//my code Function Declaration

function smallestValue(x = 0, y =0) {
	if (x < y) {
		return x;
	} else if (y < x) {
		return y;
	} else {
		return "";
	}
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

//my code Function Decalaration

function largestValue(x=0 , y=0) {
	if (x > y) {
		return x;
	} else if (y > x) 
		return y;
	}
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

//my code

let n = 0;
 function getEvenNumber(n =0) {
 	if (n % 2 == 0) {
 		return true;
 	} else {
 		return false;
 	}
 }

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

//my code Function Expression

var getOddNumberOut = function getOddNumber(n = 0) {
	if (n%2==0) {
		return "odd";
	} else {
		return "even";
	}
};

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

//my code

function calculateGrades(score, total) {
	let percentage = (score * 100) / total
	switch (true) {
		case (percentage < 60):
		return "F";
		break;
		case (percentage >= 60 && percentage < 69):
		return "D";
		break;
		case (percentage >= 70 && percentage < 79):
		return "C";
		break;
		case (percentage >= 80 && percentage < 89):
		return "B";
		break;
		case (percentage >= 90 && percentage < 100):
		return "A";
		break;
		default:
		return "check with your teacher";

	}
}
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

//my code

function stringsWithSpace(word1, word2) {
	return (word1+ " " +word2);
}

