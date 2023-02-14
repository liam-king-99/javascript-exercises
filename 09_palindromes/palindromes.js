const palindromes = function (str) {
    let start = 0
    let end = str.length - 1
    while (start < end)
    {
        // Check that the character is a letter
        while (str.charAt(start).toUpperCase() === str.charAt(start).toLowerCase())
        {
            start += 1
        }
        while (str.charAt(end).toUpperCase() === str.charAt(end).toLowerCase())
        {
            end -= 1
        }

        // Check if the letters at both ends of the string are the same
        if (str.charAt(start).toUpperCase() !== str.charAt(end).toUpperCase())
        {
            return false
        }
        start += 1
        end -= 1
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
