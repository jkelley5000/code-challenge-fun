/**
 * While the need for this specific calculation may not be very common, the utilization of the concept of recursion 
 * can be valuable when faced with a problem that may require an iterative approach. Yes, a loop would have been
 * easier to implement in this case, but the purpose of this challenge was to demonstrate the concept of recursion.
 * @param {*} n 
 * @returns calculated factorial of n
 */
function calculateFactorial(n) {
    // Base condition/case to stop the recursion, to avoid creating an infinite loop.
    if (n === 0 || n === 1) {
        return 1;
    } else {
        console.log('n: ', n); // Output = 5, 4, 3, 2
        return n * calculateFactorial(n - 1);
    }
}

const calculatedResult = calculateFactorial(5);
console.log(calculatedResult); // Output = 120