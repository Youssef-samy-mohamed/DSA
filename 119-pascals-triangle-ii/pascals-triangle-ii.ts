function getRow(rowIndex: number): number[] {
    
    if ( rowIndex === 0) return [1];

    let row:number[] = [1]

    for ( let i = 1 ; i <= rowIndex ; i++ ){
        
        const newRow: number[] = [1];

        for ( let j = 1 ; j < row.length ; j++){
            newRow.push(row[j - 1] + row[j])
        }

        newRow.push(1)
        row = newRow;
    }
    return row
};
//// better approach 
// function getRow(rowIndex: number): number[] {
//     const row = [1];
//     let prev = 1;

//     for (let k = 1; k <= rowIndex; k++) {
//         const curr = (prev * (rowIndex - k + 1)) / k;
//         row.push(curr);
//         prev = curr;
//     }

//     return row;
// }