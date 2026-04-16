// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Explanation: The contiguous subarray [4,-1,2,1] has the largest sum with sum 6.

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let subarraySize = 4;

function returnMax(value1, value2) {
    if (value1 == null) return value2;
    if (value2 == null) return value1;
    if (value1 == undefined) return value2;
    if (value2 == undefined) return value1;
    if (value1 > value2) {
        return value1;
    } else if (value2 > value1) {
        return value2;
    }

    if (value1 == value2) {
        return value2
    }

}

let max = -Infinity;

for (let i = 0; i < array.length-subarraySize; i++) {
    let sum = 0;
    for (let j = i; j < i + subarraySize; j++) {
        sum = sum + array[j];

    }
    max = returnMax(sum, max);

}

console.log(max, 'max')

