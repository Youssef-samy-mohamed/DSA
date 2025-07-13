//Apply Transform Over Each Element in Array


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

//  what map method does 
// return a new array 
// doing what is needed according to the condition map((value , index)) which is fn(arr[i] , i)

var map = function(arr, fn) {
    const result = []

    for( let i = 0 ; i < arr.length ; i++){
        result.push(fn(arr[i] , i))
    }
    return result
};


// const plusone = n => n + 1;
// console.log(map([1, 2, 3], plusone)); // [2, 3, 4]

// const plusI = (n, i) => n + i;
// console.log(map([1, 2, 3], plusI)); // [1, 3, 5]

// const constant = () => 42;
// console.log(map([10, 20, 30], constant)); // [42, 42, 42]