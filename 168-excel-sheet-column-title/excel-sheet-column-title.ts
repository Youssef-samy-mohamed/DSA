function convertToTitle(columnNumber: number): string {
    //  so i think i sould use index signture 
    let result = ""

    while ( columnNumber > 0) {
        columnNumber--; // to make it start from index 0
        const remainder = columnNumber % 26;
        const char = String.fromCharCode(remainder + 65); //'A' has a char code of 65
        result = char + result;
        columnNumber = Math.floor(columnNumber / 26);

    }
       return result;
};