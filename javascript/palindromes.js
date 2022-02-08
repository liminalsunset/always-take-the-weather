const palindromes = function(string) {
    let maybePalindrome = string.toLowerCase().replace(/[^a-z]/g, '');
    return (
        maybePalindrome
            .split('')
            .reverse()
            .join('') === maybePalindrome
    );
};

console.log(palindromes('racecar'));
    // if (reverseString.palindrome === palindrome) {
    //     return true;
    // } else {
    //     return false;
    // }
    // let split = palindrome.split('');
    // let reverse = split.reverse();
    // let join = reverse.join('');
    // if (join === palindrome) {
    //     return 'It\'s a palindrome!';
    // } else {
    //     return 'It\'s not a palindrome :(';
    // }
