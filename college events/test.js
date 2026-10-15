const students=["Priya", "Arun", "Duniya", "Rahul", "Sneha"]
//print the first and last student names.
console.log(students[0])
console.log(students[students.length-1])
//Add Karthik to the end of the array
students.push("Karthik")
console.log(students)
//Remove last student from the array
students.pop();
console.log(students)
//slice: Create a new array containing 'sadha','swetha', 'kashifa'
const slicedStudents = students.slice(1, 4);
console.log("4. New sliced array:", slicedStudents);
//Splice: Remove "Divya" from the original array.
students.splice(2, 1);
console.log("After removing 'Divya' via splice:", students);
// 6. Includes: Check whether "Priya" exists in the array.
const hasPriya = students.includes("Priya");
console.log("Does 'Priya' exist in the array?:", hasPriya);
const product =[
    {name : "laptop", price : 1000},
    {name : "phone", price : 500},
    {name : "tablet", price : 300},
    {name : "monitor", price : 200}
];

//1.fliter products with price greater than 400
const filteredProducts = product.filter((product) => product.price > 400);
console.log(filteredProducts);

// get only the names of the products
const productNames = product.map((product) => product.name);
console.log(productNames);

// calculate the total price of all products
const totalPrice = product.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);
let strong =[40,10,5,20,30]
let res=strong.sort((a,b) => a-b);
console.log(res)
let number =[10,20,30,40];

let sum = number.reduce((total, num) => total + num, 20);
console.log(sum);
let num=[10,20,15,5]
let result=num.some((n)=>{
    return n>30})
    console.log(result)