const reverseString = function(stringToReverse) {
    let finalString = ''
    let index = stringToReverse.length
    while (index >= 0)
    {
        finalString = finalString.concat(stringToReverse.charAt(index))
        index--
    }
    return finalString
};

console.log(reverseString('Hello there'))

// Do not edit below this line
module.exports = reverseString;
