// Given an integer array nums, move all 0s to the end of the array while maintaining the relative order of the non-zero elements.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]


let nums = [0, 1, 0, 3, 12];
let zero = nums[0];
let number = nums[0];


for (let i = 0; i < nums.length; i++) {

    for (let j = 0; j < nums.length; j++) {

        if (nums[j] === 0) {
            let temp = nums[i];
            nums[i] = nums[j];

            nums[j] = temp;
           console.log('hello')
        }

    }
console.log(nums,'nums')
}
