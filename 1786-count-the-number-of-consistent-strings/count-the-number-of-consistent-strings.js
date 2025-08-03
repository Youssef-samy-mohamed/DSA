// u giving me allowed of string have a special characters , and we have an array of string as well so 
// we will catch those characters that exist in the allowed that is given to me and count them and return that number


// i will take the word values and put them in an object ( hashTable )
// i will loop on the array to check if any of them exist or all of them they must be distinct 
// and finally i will return the number of them in ( count )


/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */


var countConsistentStrings = function(allowed, words) {

    let count = 0
    
    //  allowed = "ab";

        let allowedMap = {};

    for (let char of allowed) {
      allowedMap[char] = true;
    }

    // then i will loop through each word then each char so i have 2 for of loops 

    for( let word of words){
        let isConsistent = true;

      for ( let char of word   ){
        if(!allowedMap[char]){{
            isConsistent = false;
            break;
        }}  
            
      }



      if (isConsistent) {
        count++;
      }
            
        }

        return count 


    }
    // console.log(allowedMap);

    


// console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])); //  2







// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.