const palindromes = function(palindrome) {
    // if (reverseString.palindrome === palindrome) {
    //     return true;
    // } else {
    //     return false;
    // }

    let split = palindrome.split('');
    let reverse = split.reverse();
    let join = reverse.join('');
    if (join === palindrome) {
        return 'It\'s a palindrome!';
    } else {
        return 'It\'s not a palindrome :(';
    }

};

console.log(palindromes('hello'));
console.log(palindromes('racecar'));
