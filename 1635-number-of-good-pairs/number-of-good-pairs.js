/**
 * @param {number[]} nums
 * @return {number}
 */






var numIdenticalPairs = function (nums) {

    let count = 0;
    let frequent = {}; // this is my hashTable


    for( let num of nums ) {
        if( frequent[num]){
            count = count + frequent[num]
            frequent[num]++
        }else {
            frequent[num] = 1
        }
    }


    return count 


};


