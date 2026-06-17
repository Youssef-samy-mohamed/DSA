/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // i will sort this array ( descending order )
    // and then will get highest 3 numbers in my array and replace them with ranks!

// i don't wanna change the main array 
// so will use spread operator to make shallow coppy 
    const sortedScore = [...score].sort(( a , b ) => b - a )
    const rankMap = new Map()

    for( let i = 0 ; i < sortedScore.length ; i++ ){
        if(i === 0 ){
            rankMap.set(sortedScore[i] , "Gold Medal")
        }else if ( i === 1 ){
            rankMap.set( sortedScore[i] , "Silver Medal")
        }else if ( i === 2 ){
            rankMap.set(sortedScore[i] , "Bronze Medal")
        }else { rankMap.set( sortedScore[i] , String(i+1)) // ( i + 1 ) becuase the rank start from 1 not zero 
        }
    }
    return score.map(num => rankMap.get(num));
};