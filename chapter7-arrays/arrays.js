// Creating Arrays
var empty = []; // An array with no elements
var primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
var misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma
var base = 1024;
var table = [base, base+1, base+2, base+3];
console.log(table)

var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];
var count = [1,,3]; // Elements at indexes 0 and 2. count[1] => undefined
var undefs = [,,]; // An array with no elements but a length of 2
var a = new Array()
var a = new Array(10)
var a = new Array(5, 4, 3, 2, 1, "testing, testing");

// Reading and Writing Array Elements

var a = ["world"]; // Start with a one-element array
var value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1
i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3
a[-1.23] = true; // This creates a property named "-1.23"
a["1000"] = 0; // This the 1001st element of the array
a[1.000] // Array index 1. Same as a[1]
a = [true, false]; // This array has elements at indexes 0 and 1
a[2] // => undefined. No element at this index.
a[-1] // => undefined. No property with this name.

//  Sparse Arrays
a = new Array(5); // No elements, but a.length is 5.
a = []; // Create an array with no elements and length = 0.
a[1000] = 0; // Assignment adds one element but sets length to 1001.
var a1 = [,]; // This array has no elements and length 1
var a2 = [undefined]; // This array has one undefined element
0 in a1 // => false: a1 has no element with index 0
0 in a2 // => true: a2 has the undefined value at index 0

a = [1,2,3,4,5]; // Start with a 5-element array.
a.length = 3; // a is now [1,2,3].
a.length = 0; // Delete all elements. a is [].
a.length = 5; // Length is 5, but no elements, like new Array(5)

a = [1,2,3]; // Start with a 3-element array.
Object.defineProperty(a, "length", // Make the length property
    {writable: false}); // readonly.
a.length = 0; // a is unchanged.

//  Adding and Deleting Array Elements

a = [] // Start with an empty array.
a[0] = "zero"; // And add elements to it.
a[1] = "one";
a = []; // Start with an empty array
a.push("zero") // Add a value at the end. a = ["zero"]
a.push("one", "two") // Add two more values. a = ["zero", "one", "two"]

a = [1,2,3];
delete a[1]; // a now has no element at index 1
(1 in a) // => false: no array index 1 is defined
a.length // => 3: delete does not affect array length

//  Array Methods

var a = [1, 2, 3]; // Create a new array with these three elements
a.join(); // => "1,2,3"
a.join(" "); // => "1 2 3"
a.join(""); // => "123"
var b = new Array(10); // An array of length 10 with no elements
b.join('-') // => '---------': a string of 9 hyphens

var a = [1,2,3];
a.reverse().join() // => "3,2,1" and a is now [3,2,1]
var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", "); // s == "apple, banana, cherry
var a = [33, 4, 1111, 222];
a.sort(); // Alphabetical order: 1111, 222, 33, 4
a.sort(function(a,b) { // Numerical order: 4, 33, 222, 1111
    return a-b; // Returns &lt; 0, 0, or &gt; 0, depending on order
});
a.sort(function(a,b) {return b-a}); // Reverse numerical order

a = ['ant', 'Bug', 'cat', 'Dog']
a.sort(); // case-sensitive sort: ['Bug','Dog','ant',cat']
a.sort(function(s,t) { // Case-insensitive sort
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}); // => ['ant','Bug','cat','Dog']

var a = [1,2,3];
a.concat(4, 5) // Returns [1,2,3,4,5]
a.concat([4,5]); // Returns [1,2,3,4,5]
a.concat([4,5],[6,7]) // Returns [1,2,3,4,5,6,7]
a.concat(4, [5,[6,7]]) // Returns [1,2,3,4,5,[6,7]]
var a = [1,2,3,4,5];
a.slice(0,3); // Returns [1,2,3]
a.slice(3); // Returns [4,5]
a.slice(1,-1); // Returns [2,3,4]
a.slice(-3,-2); // Returns [3]

var a = [1,2,3,4,5,6,7,8];
a.splice(4); // Returns [5,6,7,8]; a is [1,2,3,4]
a.splice(1,2); // Returns [2,3]; a is [1,4]
a.splice(1,1); // Returns [4]; a is [1]

var stack = []; // stack: []
stack.push(1,2); // stack: [1,2] Returns 2
stack.pop(); // stack: [1] Returns 2
stack.push(3); // stack: [1,3] Returns 2
stack.pop(); // stack: [1] Returns 3
stack.push([4,5]); // stack: [1,[4,5]] Returns 2
stack.pop() // stack: [1] Returns [4,5]
stack.pop(); // stack: [] Returns 1
var a = []; // a:[]
a.unshift(1); // a:[1] Returns: 1
a.unshift(22); // a:[22,1] Returns: 2
a.shift(); // a:[1] Returns: 22
a.unshift(3,[4,5]); // a:[3,[4,5],1] Returns: 3
a.shift(); // a:[[4,5],1] Returns: 3
a.shift(); // a:[1] Returns: [4,5]
a.shift(); // a:[] Returns: 1

//  ECMAScript 5 Array Methods

var data = [1,2,3,4,5]; // An array to sum
// Compute the sum of the array elements
var sum = 0; // Start at 0
data.forEach(function(value) { sum += value; }); // Add each value to sum
sum // => 15
// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; });
data

/*
If you need to terminate early, you must throw an
exception, and place the call to forEach() within a try block. The following code defines
a foreach() function that calls the forEach() method within such a try block.
 */
a = [1, 2, 3];
b = a.map(function(x) { return x*x; }); // b is [1, 4, 9]

a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 }); // [2, 1]
everyother = a.filter(function(x,i) { return i % 2 == 0 }); // [5, 3, 1]






