const repeatString = function(stringToRepeat, numberOfTimesToRepeatString) {
    let finalString = ''
    let i = 0
    while (i < numberOfTimesToRepeatString)
    {
        finalString = finalString.concat(stringToRepeat)
        i++
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
