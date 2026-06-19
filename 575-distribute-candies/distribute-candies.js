/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {

    // so and the end i return the unique elements 

    const uniqueNumbers = new Set(candyType).size

    return Math.min(uniqueNumbers, candyType.length / 2); // i used Math.min to handle case two 

};