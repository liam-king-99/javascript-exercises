const removeFromArray = function(initialArray, ...elementsToRemove) {
    const finalArray = initialArray.filter(element => !elementsToRemove.includes(element))
    return finalArray
};
console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
