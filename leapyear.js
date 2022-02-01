const leapYears = function(num) {
    if ((num > 0) && (num / 4) && (num % 100 !== 0)
        // unless the number is divisible by 400 :D
    ) {
        return 'It might be a leap year.';
    } else {
        return 'Probably not a leap year.';
    }
};


console.log(leapYears(1984));
console.log(leapYears(1900));