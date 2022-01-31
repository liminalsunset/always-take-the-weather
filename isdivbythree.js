let divisibleByThree = function(num) {
    let stitches = (num % 3);
    return `Your remainder is ${stitches} which means you need ${3 - stitches} more stitch(es).`;
};
// 264

console.log(divisibleByThree(263));