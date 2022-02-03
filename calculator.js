const add = function(num1, num2) {
    return num1 + num2;
};
  
const subtract = function(num1, num2) {
    return num1 - num2;
};
  
const sum = function(num1, num2) {
    return num1 + num2;
};
  
const multiply = function(num1, num2) {
    return num1 * num2;
};
  
const power = function(num1, num2) {
    return num1 ** num2;
};
  
const factorial = function(num) {
    if (num === 0 || num === 1) {
        return 1;
    } for (let i = num - 1; i >= 1; i--){
        num *= i;
    }
    return num;
};

console.log(add(1, 2));
console.log(subtract(2, 1));
console.log(sum(1, 1));
console.log(multiply(3, 3));
console.log(power(1, 2));
console.log(factorial(5));