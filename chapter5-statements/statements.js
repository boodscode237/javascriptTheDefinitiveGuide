// Expressions are evaluated to produce a value, but statements are
// executed to make something happen

// compound Statement

{
    x = Math.PI;
    cx = Math.cos(x);
    console.log(`cos(n) = ${cx}`);
}
a = [1,2,3,4,5,6,7,8,9,10,11,12,13]
for(let i = 0; i < a.length; a[i++] = 0) console.log(i);

// if statements
//for single statements
username = ""
if(username == null)
    username = "John Doe";
if(!username) username="John Doe";

// for multiple statements, we use blocks
address = ""
if (!address) {
    address = "";
    let message = "Can you tell us your address?";
}

// if else statements
n = 2
if (n === 1)
    console.log("You have 1 new message.");
else
    console.log(`You have ${n} new messages.`);


// The if/else statement evaluates an expression and executes one of two pieces of
// code, depending on the outcome.

if (n === 1) {
// Execute code block #1
} else if (n === 2) {
// Execute code block #2
} else if (n === 3) {
// Execute code block #3
} else {
// If all else fails, execute block #4
}

// switch statements

switch(n) {
    case 1: // Start here if n === 1
// Execute code block #1.
        break; // Stop here
    case 2: // Start here if n === 2
// Execute code block #2.
        break; // Stop here
    case 3: // Start here if n === 3
// Execute code block #3.
        break; // Stop here
    default: // If all else fails...
// Execute code block #4.
        break; // Stop here
}

// Here is a more realistic example of the switch statement; it converts a value to a
// string in a way that depends on the type of the value:

function convert(x) {
    switch(typeof x) {
        case "number": // Convert the number to a hexadecimal integer
            return x.toString(16);
        case "string": // Return the string enclosed in quotes
            return '"' + x + '"';
        default: // Convert any other type in the usual way
            return String(x);
    }
}

console.log(convert("kio"))
console.log(convert(5))
console.log(convert("5"))

// Loops
// While loops

// To execute a while statement, the interpreter first evaluates expression. If the value of
// the expression is falsy, then the interpreter skips over the statement that serves as the
// loop body and moves on to the next statement in the program. If, on the other hand,
//     the expression is truthy, the interpreter executes the statement and repeats, jumping
// back to the top of the loop and evaluating expression again.

let count = 0;
while(count < 10) {
    console.log(count);
    count++;
}

// do/while
// The do/while loop is like a while loop, except that the loop expression is tested at the
// bottom of the loop rather than at the top. This means that the body of the loop is
// always executed at least once.
/*
do
    statement
while (expression);
*/
function printArray(a) {
    let len = a.length, i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        } while(++i < len);
    }
}

// for
// The for statement simplifies loops that follow a common pat‐
// tern.\

/*
* for(initialize ; test ; increment)
*    statement
*
*initialize;
*while(test) {
*    statement
*    increment;
* }
*
* */
let sum = 0;
for (let count = 0; count < 10; count++) {
    console.log(sum += count);
}

let i, j, suma = 0;
for(i = 0, j = 10 ; i < 10 ; i++, j--) {
    suma += i * j;
    console.log(suma)
}
console.log(suma)

// for/of
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum_ = 0;
for(let element of data) {
    sum_ += element;
}
console.log(`sum_ = ${sum_}`)

// for/of with objects
// let o = { x: 1, y: 2, z: 3 };
// for(let element of o) { // Throws TypeError because o is not iterable
//     console.log(element);
// }

// use for/of with the Object.keys(), entries and Object.values()

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
    keys += k;
}

let sum_1 = 0;
for(let v of Object.values(o)) {
    sum_1 += v;
}

let pairs = "";
for(let [k, v] of Object.entries(o)) {
    pairs += k + v;
}

// for/of with strings

let frequency = {};
for(let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}

// for/of with Set and Map

let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
    unique.push(word);
}
console.log(wordSet)
console.log(unique)

// Asynchronous iteration with for/await
// Read chunks from an asynchronously iterable stream and print them out
async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk);
    }
}

// for/in
for(let i in a) console.log(i)























