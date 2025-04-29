let arr = [1, 2, 3];  // Original array
console.log("Original:", arr);

// ➡️ Add at end
arr.push(4);    
console.log("After push(4):", arr);  // [1, 2, 3, 4]

// ➡️ Remove from end
arr.pop();      
console.log("After pop():", arr);    // [1, 2, 3]

// ➡️ Add at beginning
arr.unshift(0); 
console.log("After unshift(0):", arr); // [0, 1, 2, 3]

// ➡️ Remove from beginning
arr.shift();    
console.log("After shift():", arr);    // [1, 2, 3]

// ➡️ Map: multiply each item by 2
let double = arr.map(x => x * 2); 
console.log("After map(x * 2):", double); // [2, 4, 6]
console.log("Original after map():", arr); // [1, 2, 3]

// ➡️ Filter: keep items greater than 2
let bigger = arr.filter(x => x > 2); 
console.log("After filter(x > 2):", bigger); // [3]
console.log("Original after filter():", arr); // [1, 2, 3]

// ➡️ Reduce: add all numbers together
let sum = arr.reduce((total, num) => total + num); 
console.log("Sum after reduce():", sum); // 6 (1 + 2 + 3)

// ➡️ Slice: copy a portion of array
let sliced = arr.slice(0, 2);  
console.log("After slice(0,2):", sliced); // [1,2]
console.log("Original after slice():", arr); // [1,2,3]

// ➡️ Splice: remove and/or add items
arr.splice(1, 1, 9);  
// At index 1, remove 1 item (2), and insert 9
console.log("After splice(1,1,9):", arr); // [1,9,3]

// ➡️ Join: combine array into string
let joined = arr.join("-");
console.log("After join('-'):", joined); // "1-9-3"
