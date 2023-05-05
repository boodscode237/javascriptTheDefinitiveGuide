// Compound and Empty Statements
{
    x = Math.PI
    cx = Math.cos(x)
    console.log("cos(π) = " + cx)
}

//var is used to create global variables
var i;  // One simple variable
let j = 0; // One var, one value
var p, q; // Two variables
var name = "Don";
var greeting = "hello" + name; // A complex initializer
var x = 2.34, y = Math.cos(0.75), r, theta; // Many variables
var x = 2, y = x*x; // Second var uses the first
var x = 2, // Multiple variables...
    f = function(x) { return x*x }, // each on its own line
    y = f(x);

let o = [1,2,3,4,5,6,7,8,9,10]
for(i = 0; i < 10; i++) console.log("1", i);
i = 0;
j = 10;
for(; i < 10; i++,j--) console.log("2", i*j);
for(i in o) console.log("3", i);

// Conditionals

function convert(x) {
    switch(typeof x) {
        case 'number': // Convert the number to a hexadecimal integer
            return x.toString(16);
        case 'string': // Return the string enclosed in quotes
            return '"' + x + '"';
        default: // Convert any other type in the usual way
            return String(x);
    }
}


function printArray(a) {
    var len = a.length, i = 0;
    if (len == 0)
        console.log("Empty Array");
    else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
}

printArray([4, 's', 5, 8, 11, 14, 17, 20])
printArray([])

/*
for(initialize ; test ; increment)
 statement

 initialize;
 while(test) {
     statement
     increment;
 }

* */

for(var count = 0; count < 10; count++)
    console.log(count);

let i;
for(i = 0, j = 10 ; i < 10 ; i++, j--)
    sum += i * j;

for(let i = 0; i < a.length; i++) // Assign array indexes to variable i
    console.log(a[i]); // Print the value of each array element

for(let p in o) // Assign property names of o to variable p
    console.log(o[p]); // Print the value of each property

mainloop: while(token != null) {
    // Code omitted...
    continue mainloop; // Jump to the next iteration of the named loop
    // More code omitted...
}

var matrix = getData(); // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
var sum = 0, success = false;
// Start with a labeled statement that we can break out of if errors occur
compute_sum: if (matrix) {
    for(var x = 0; x < matrix.length; x++) {
        var row = matrix[x];
        if (!row) break compute_sum;
        for(var y = 0; y < row.length; y++) {
            var cell = row[y];
            if (isNaN(cell)) break compute_sum;
            sum += cell;
        }
    }
    success = true;
}

function factorial(x) {
    let f;
// If the input argument is invalid, throw an exception!
    if (x < 0) throw new Error("x must not be negative");
    // Otherwise, compute a value and return normally
    for(f = 1; x > 1; f *= x, x--) /* empty */ ;
    return f;
}