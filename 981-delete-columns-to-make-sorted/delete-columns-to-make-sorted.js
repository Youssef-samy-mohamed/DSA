/**
 * @param {string[]} strs
 * @return {number}
 */

//  i need 
var minDeletionSize = function(strs) {

    let count = 0;


    for( let col =0 ; col< strs[0].length ;col++ ){
        for( let row = 0 ; row < strs.length - 1; row++ ) // when the we need to reach last row row < strs.length - 1

        if( strs[row][col]  > strs[row + 1][col]){
            count++;
            break;
        }

    }

    return count;
};