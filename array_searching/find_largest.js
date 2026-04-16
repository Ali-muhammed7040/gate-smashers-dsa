//  I'm solving problem for learning donot suggest me the answer
//  Find the largest element in an array

let array = [3, 7, 2, 9, 5];

let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]
    }
}

console.log(max, 'max')