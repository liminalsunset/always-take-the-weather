const leapYears = function(num) {
    if ((num > 0) && (num / 4) && (num % 100 === 0) && (num % 400 === 0)){
        return 'It might be a leap year.';
    } else if ((num > 0) && (num / 4) && (num % 100 !== 0) && (num % 400 !== 0)){
        return 'Probably not a leap year.';
    } else {
        return 'Please play again.';
    }
};


console.log(leapYears(1984));
console.log(leapYears(1900));
console.log(leapYears(2000));