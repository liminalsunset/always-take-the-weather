const removeFromArray = function(arr, ...values) {
    return arr.filter(item => !values.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));
