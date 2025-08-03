// we need to track the char in the t that is given if he movend or not , if he moved we will 
// subtract that first position the char were in from the second that he went two 

// first i need to get the first index for each char => indexOf
// second i need to track the the index for the char in t maybe doing the samething 
// and finally subtract each other and return the value 


var findPermutationDifference = function (s, t) {
    // s = "abc"
    // t="bca"
    let sMap = {};
    let tMap = {}
    for( let i = 0 ; i < s.length ; i++ ){
        sMap[s[i]] = i
    }


    for( let j = 0 ; j < t.length ; j++ ){
        tMap[t[j]] = j 
    }

    let totalDifference = 0

    for( let char in sMap){
        totalDifference = totalDifference + Math.abs(sMap[char] - tMap[char])
    }


// console.log(totalDifference);

    return totalDifference


};


// findPermutationDifference()