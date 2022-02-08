const practiceHours = function(arr) {
    // takes in an array of total minutes practiced per session
    let totalMinutes = arr.reduce((total, current) => total + current, 0);
    // returns total number of hours practiced, rounded down to the completed hour
    let totalHours = Math.floor(totalMinutes / 60);
    console.log(`You currently have ${totalHours} practice hours!`);
};

practiceHours([45, 30, 30, 25, 15, 45, 50, 35, 45, 60]);