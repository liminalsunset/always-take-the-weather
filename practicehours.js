const practiceHours = function(arr) {
    let totalMinutes = arr.reduce((total, current) => total + current, 0);
    console.log(totalMinutes);
};

console.log(practiceHours([45, 30, 30, 25, 15, 45]));