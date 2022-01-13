

const reverseString = function(str) {
    str = 'happy trees';
    const splitString = str.split('');
    const reverseSplit = splitString.reverse();
    return reverseSplit;
};

console.log(reverseString());

