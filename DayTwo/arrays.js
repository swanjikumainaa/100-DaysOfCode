// Manipulating an array using pop(),push(),shift() and unshift() methods.

// initializing the array
let fruits = ["apple","banana","orange"];

// displaying the array
console.log("Original array:",fruits);

// using pop() to remove the last element
let removedFruit = fruits.pop();
console.log("Array after pop():",fruits);
console.log("Removed fruit:",removedFruit);

//using push() to add an element to the end of the array
fruits.push("grape");
console.log("Array after push():",fruits);

// using shift() to remove the first element
let shiftedFruit = fruits.shift();
console.log("Array after shift();",fruits);
console.log("Shifted Fruit:",shiftedFruit);

// using unshift() to add an element to te beginning
fruits.unshift("Kiwi");
console.log("Array after unshift():",fruits);



