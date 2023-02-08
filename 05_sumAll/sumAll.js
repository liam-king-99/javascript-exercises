const sumAll = function(start, end) {
    if (start < 0 || end < 0)
    {
        return 'ERROR'
    }
    if (typeof(start) !== 'number' || typeof(end) !== 'number')
    {
        return 'ERROR'
    }
    let sum = 0
    let lowerNumber = Math.min(start, end)
    let higherNumber = Math.max(start, end)
    for (let i = lowerNumber; i <= higherNumber; i++)
    {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
