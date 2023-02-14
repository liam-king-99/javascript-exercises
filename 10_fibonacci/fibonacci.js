const fibonacci = function(num) {
    num = Number(num)
    if (num < 0)
    {
        return "OOPS"
    }
    let low = 0
    let high = 1
    while (num > 0)
    {
        temp = high
        high += low
        low = temp
        num -= 1
    }
    return low

};

// Do not edit below this line
module.exports = fibonacci;
