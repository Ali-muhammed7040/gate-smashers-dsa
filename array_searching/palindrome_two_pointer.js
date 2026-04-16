// Input: "A man, a plan, a canal: Panama"
// Output: true
// Input: "race a car"
// Output: false

function isAlphabet(char) {
    return (
        (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9')
    )
}

function checkPalindrome(input) {
    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        if (!isAlphabet(input[left])) {
            left++;
            continue;
        } else if (!isAlphabet(input[right])) {
            right--;
            continue;
        }

        if (input[left].toLowerCase() !== input[right].toLowerCase()) {
            console.log(input[left].toLowerCase())
            console.log(input[right].toLowerCase())
            return false
        }
        left++;
        right--;
    }

    return true
}

let response = checkPalindrome("A man, a plan, a canal: Panama")
console.log(response, 'response');