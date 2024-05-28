//array literal
let numbers = [9, 3, 8, 11]
//array constructor
let data = new Array('Khanya', 'John', 15, 18)
//array.of()
let myArr1 = Array.of(9, 2, 4)
// array.from
let myArr2 = Array.from(numbers)
//array.fill()
let emoji = new Array(4).fill('😍')
// Add a new elment
numbers.push(11, 'Nash')
console.log(numbers);
// Remove the Last element
numbers.pop()
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
// Find an element 
console.log(numbers.find(value => value == 9));
//
console.log(numbers.findIndex( value => value == 9));
