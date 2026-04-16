// 1. Normal random numbers
let array = [10, 25, 8, 40, 15];

// // 2. Already sorted ascending
// let array = [1, 2, 3, 4, 5, 6];

// // 3. Sorted descending
// let array = [100, 90, 80, 70, 60];

// // 4. arrayy with duplicates
// let array = [5, 5, 5, 3, 2, 1];

// // 5. Negative numbers
// let array = [-10, -20, -3, -50, -1];

// // 6. Mixed positive and negative
// let array = [-5, 0, 12, -2, 8, 12];
// let array = [12, 12, 10];

let max1;
let max2;

if (array[0] > array[1]) {
    max1 = array[0];
    max2 = array[1];
} else {
    max2 = array[0];
    max1 = array[1];
}

for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (num > max1) {
        max2 = max1;
        max1 = num;
    } else if (num > max2 && num !== max1) {
        max2 = num
    }

}

if (max1 === max2) {
    console.log("no second largest number")
} else {
    console.log(max1, 'max1');
    console.log(max2, 'max2');
}