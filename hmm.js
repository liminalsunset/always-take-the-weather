const sumAll = function(num1, num2) {
    let sum = num1;
    for (let i = 0; i < num2; i++) {
        sum += i;
        return sum;
    }
};

console.log(sumAll(1, 4));