/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// i can store the jewels values in an object ( hashTable )
// then iterate on stones and see how many frequent of the values that does exist on both jewels and stones 


var numJewelsInStones = function (jewels, stones) {

    let count = 0;

     let counts  = {}; 

        // {
        //     "a":1,
        //     'A':1,
        // }

        for( let char of jewels){

            counts[char] = true

        }


        for( let char of stones ){
            if(counts[char]){
                count++
            }
        }


return count 

};



// console.log(numJewelsInStones("aA" , "aAAbbbb"));
