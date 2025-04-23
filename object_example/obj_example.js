let arr1=[1,2,3];
let arr2=arr1;
arr2.push(4)

console.log(arr1)
console.log(arr2)
// we add in arr2 and it add in arr1 or arr2 in both  beacue when we assign arr1 to arr2 it not assing the value it assing the reference on memoy  location of arr1 to arr2 

// Function Example
function greet() {
    console.log("Hello!");
}

let func1 = greet;  // func1 is a reference to the greet function
let func2 = func1;  // func2 is also a reference to greet

func1();  // Output: Hello!
func2();  // Output: Hello!

// Object Example - Adding/Removing Properties
let person = { name: "Alice", age: 25 };
let anotherPerson=person;
person.city='Peshawar';
console.log(person)

//  let  obj={

//     'name': 'Afaq Zahir',
//     'fName':'Zahir Khanzada',
//     'age':26,
//     'role': 'Flutter Developer',
//     'free':false,

//  }

//  console.log(obj)
//  console.log(obj.role)
//  console.log(obj.fName)
//  console.log(obj.age)
//  console.log(typeof (obj))
//  console.log(typeof (obj.age))


//  delete obj['free']
//  obj['role']='Flutter Full Stack Jounery ON'

//  console.log(obj)
