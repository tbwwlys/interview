const arr = [1, 2, 3]
const arr1 = [...arr]
arr1[1] = 8;
console.log(arr)    // [1, 2, 3]
console.log(arr1)   // [1, 8, 3]

const arr2 = [1, [2, 3], 4]
const arr3 = [...arr2]
arr3[1][0] = 9;
console.log(arr2)    // [1, [9, 3], 4]
console.log(arr3)    // [1, [9, 3], 4]