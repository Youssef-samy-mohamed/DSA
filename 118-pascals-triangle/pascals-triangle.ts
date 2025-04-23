function generate(numRows: number): number[][] {
    // to solve it look at how we get every row (a+b) power x , if x = 0 then first row = 1 ..
    // but this one is hard to code and bad interms of performance 

    const triangle: number[][] = [];

   for (let row = 0; row < numRows; row++) {
        const newRow: number[] = [1]; 
        // for the middle element 
        for (let col = 1; col < row; col++) {
            const prevRow = triangle[row - 1];
            const value = prevRow[col - 1] + prevRow[col];
            newRow.push(value);
        }

        if (row > 0) newRow.push(1); // Every row  ends with 1
        triangle.push(newRow);
    }

    return triangle;
}