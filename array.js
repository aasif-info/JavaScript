// // Arrays in JavaScript


// const arr = ["1", "2", "3",];
// console.log(arr)

// // finding particular index value
// console.log(arr[1])

// // finding length of arr
// console.log(arr.length)

// // push/pop for modifying at the end of array
// arr.push("4","5")
// console.log(arr)
// arr.pop()
// console.log(arr)

// // Shift and Unshift for modyfying at the array of beggining

// arr.unshift("a","b")
// console.log(arr)

// arr.shift()


// splice : to modify any element of an array:

const arr = ["a", "b", "c", "d"];

arr.splice(1, 2, "x", "y", "z");

console.log(arr);

// slice : used to extract portion of array without changing original value 

const number=["1","2","3","4","5"];
console.log(number.slice(1,5));
 console.log(number)
