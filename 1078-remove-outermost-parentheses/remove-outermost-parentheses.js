/**
 * @param {string} s
 * @return {string}
 */
//  so i remove the outermost parenthese which is last input when we wirte 
// which is the top in our problem 
// and there's age case here which is if there's no mostouter parenthes return ""

// the algorithm is 
// will chech is ( is followed by another ( if yes remove the frist (

var removeOuterParentheses = function(s) {

     let depth = 0;
    let result = "";

    for( let i = 0 ; i < s.length ; i++ ){

        if( s[i] === "(" ){

            if (depth > 0) {
                result += s[i];
            }
            depth++
        }else if( s[i] === ")"){
            depth--
            if (depth > 0) {
                result += s[i];
            }
        }
    }
    return result;
};