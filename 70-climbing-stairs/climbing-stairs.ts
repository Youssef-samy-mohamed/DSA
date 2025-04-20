function climbStairs(n: number): number {
    if (n <= 2) return n;

    let oneStep = 2; 
    let twoSteps = 1; 
    let allWays = 0;

    for (let i = 3; i <= n; i++) {
        allWays = oneStep + twoSteps;
        twoSteps = oneStep;
        oneStep = allWays;
    }

    return allWays;
}
