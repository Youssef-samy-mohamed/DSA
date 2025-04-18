function countAndSay(n: number): string {

let result = "1";


for ( let i = 1 ; i < n  ; i++){
    let current = "";
    let count = 1;

    for ( let j = 0 ; j < result.length ; j++){


        if ( result[j] === result[j+1]){
            count++
        }else {
            current = current + count.toString() + result[j];
            count = 1;
        }


    }


        result = current


}
    return result;
};