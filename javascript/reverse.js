const reverseString = function(str) {
    // str = 'happy trees';
    const splitString = str.split('');
    const reverseSplit = splitString.reverse();
    return reverseSplit.join('');
};

// but so pretty refactored too:

// const reverseString = function(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// };

console.log(reverseString('hello'));

