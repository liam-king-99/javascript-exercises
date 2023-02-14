const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numberArray) {
	return numberArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
};

const multiply = function(numberArray) {
  return numberArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
  }, 1)
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
	let total = 1
  while (num > 1)
  {
    total *= num
    num -= 1
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
