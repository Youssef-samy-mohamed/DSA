function merge(intervals: number[][]): number[][] {
    // let's define the problem 
    // we need to merge the overlapping intervals 

    // analyze the problem 
    // so if the number in the start or the end of the intervel or between them we merge if not we skip 
    
    // generate time 
    

    if ( intervals.length <= 1 ) return intervals;

//  sort the first element in the first array with the first element in the second array 
    intervals.sort(( a , b ) => a[0] - b[0])
//   this is where my result is 
    const merged: number[][] = [];
    let current = intervals[0]


    for( let i = 1 ; i < intervals.length ; i++ ) {
        const next = intervals[i]
        if ( current[1] >= next[0]){
            // merge 
            current[1] = Math.max(current[1] , next[1])
        }else {
            // if there's no ovelap
            merged.push(current)
            current = next;
        }
    }
// push last array 
merged.push(current)

return merged;
    
};