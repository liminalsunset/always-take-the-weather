const sumAll = function(num1, num2) {
    if (num2 > num1) {
        num1 =+ 1;
}
    let sum = num1 + num2;
    return sum;
};

console.log(sumAll(1, 2));