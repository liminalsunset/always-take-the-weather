const sumAll = function(num1, num2) {
    // let sum = 0;
    // for (let i = num1; i < num2; i++) {
    //     sum += i;
    // }
    // return sum;
    if (num1 > num2) {
        const flip = num1;
        num1 = num2;
        num2 = flip;
    }
    let sum = 0;
    for (let i = num1; i < num2 + 1; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(123, 1));
