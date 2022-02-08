const leapYears = function(num) {
    // leap years are divisible by 4
    // years divisible by 100 are not leap years
    // unless they are also divisible by 400
    if (num % 4 === 0 && (num % 100 !== 0 ||num % 400 === 0)) {
        return 'It might be a leap year.';
    } else {
        return 'Not a leap year.';
    }
};


console.log(leapYears(1984)); // leap year
console.log(leapYears(1900)); // not a leap year
console.log(leapYears(2000)); // leap year