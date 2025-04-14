function decrypt(code: number[], k: number): number[] {
    if (k === 0) return new Array(code.length).fill(0);

    let result = [];

    if (k > 0) {
        for (let i = 0; i < code.length; i++) {
            let sum = 0;
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % code.length]; 
            }
            result.push(sum);
        }
    } else {
        for (let i = 0; i < code.length; i++) {
            let sum = 0;
            for (let j = 1; j <= Math.abs(k); j++) {
                sum += code[(i - j + code.length) % code.length];
            }
            result.push(sum);
        }
    }

    return result;
}
