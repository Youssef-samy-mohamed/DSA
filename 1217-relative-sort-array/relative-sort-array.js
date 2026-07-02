/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

// if i check every single element in arr2 will use nested loops 
// but i will sort the values of arr2 in hashmap to do the other opeerations in one for loop 
var relativeSortArray = function(arr1, arr2) {
   
    const order =  {};
// am sorting the index of every single element in arr2
    for( let i = 0 ; i < arr2.length ; i++ ){
        order[arr2[i]] = i
    }


    arr1.sort((a,b) => {
        const aIn = a in order; // does a 
        const bIn = b in order 
        

    if( aIn && bIn ){
        return order[a] - order[b]
    }

    if(aIn) return -1;
    if(bIn) return 1;

    return a - b 

    })

    return arr1;
};