const add = function(num1, num2) {
    return num1 + num2;
};
  
const subtract = function(num1, num2) {
    return num1 - num2;
};
  
const sum = function(arr) {
    let sumOfArray = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfArray += arr[i];
    }
    return sumOfArray;
};
  
const multiply = function(arr) {
    // let multSum = 0;
    // for (let i = 0; i < arr.length; i++){
    //     multSum += multSum * arr[i];
    // } return multSum;
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
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
console.log(multiply([3, 3]));
console.log(power(1, 2));
console.log(factorial(5));