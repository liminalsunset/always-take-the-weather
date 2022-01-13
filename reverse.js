

const reverseString = function(str) {
    // str = 'happy trees';
    const splitString = str.split('');
    const reverseSplit = splitString.reverse();
    return reverseSplit.join('');
};

console.log(reverseString('hello'));

