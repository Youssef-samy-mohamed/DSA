function divide(dividend: number, divisor: number): number {
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    if (dividend === MIN && divisor === -1) return MAX;

    // Count the number of negatives
    let negatives = 2;

    if (dividend > 0) {
        dividend = -dividend;
        negatives--;
    }

    if (divisor > 0) {
        divisor = -divisor;
        negatives--;
    }

    let quotient = 0;

    while (dividend <= divisor) {
        let temp = divisor;
        let multiple = 1;

        while (dividend - temp <= temp) {
            temp += temp;
            multiple += multiple;
        }

        dividend -= temp;
        quotient += multiple;
    }

    return negatives === 1 ? -quotient : quotient;
}
