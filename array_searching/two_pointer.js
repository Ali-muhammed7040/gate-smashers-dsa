let array = [1, 2, 3, 5, 7, 10, 11, 15];

let left = 0;
let right = array.length - 1;
let target = 5;

function twoSum() {
    while (left < right) {

        let currentSum = array[left] + array[right];

        if (currentSum === target) {
            return { left, right }
        }
        if (currentSum < target) {
            left++;
        } else if (currentSum > target) {
            right--;
        }
    }
    return null
}

const output = twoSum();
console.log(output, 'output')