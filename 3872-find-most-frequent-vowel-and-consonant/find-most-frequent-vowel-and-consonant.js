// we need to get the maximum frequency of the vowels compare them between vowels and the same for consonant .






/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {

    let stringMap = {};

    for(let char of s ){
        stringMap[char] = ( stringMap[char] || 0 ) + 1 
    }

    const vowels = new Set (['a' , 'e','i', 'o' , 'u'])


    let maxVowelFrequency = 0;
    let maxConsonatFrequency = 0;

    for ( let char in stringMap){

        if(vowels.has(char)){
            maxVowelFrequency =    Math.max(maxVowelFrequency , stringMap[char])
        }else {
            maxConsonatFrequency = Math.max(maxConsonatFrequency , stringMap[char])
        }




    }

        return maxVowelFrequency + maxConsonatFrequency;

};