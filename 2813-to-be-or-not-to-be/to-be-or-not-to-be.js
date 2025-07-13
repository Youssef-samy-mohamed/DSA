/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {

    return {
        toBe: function (val1){
            if(val === val1){
                return true
            }else{
                throw new Error("Not Equal")
            }
        },
        notToBe: function (val1){
            if ( val !== val1 ){
                return true
            }else {
                throw new Error ("Equal")
            }
        }
    }

};
//  console.log(expect(5).notToBe(6));
 