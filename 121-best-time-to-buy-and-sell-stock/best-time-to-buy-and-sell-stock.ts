function maxProfit(prices: number[]): number {
    let minPrice = prices[0]; 
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        if (currentPrice < minPrice) {
            minPrice = currentPrice; 
        } else {
            const profit = currentPrice - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit; 
            }
        }
    }
    return maxProfit;
}


// i can use pointer approach but time complexity is O(2)2 


// function maxProfit(prices: number[]): number {
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const profit = prices[j] - prices[i];
//             if (profit > maxProfit) {
//                 maxProfit = profit;
//             }
//         }
//     }
//     return maxProfit;
// }