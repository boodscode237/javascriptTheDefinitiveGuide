// Creating Objects

const empty = {}; // An object with no properties
const point = {x: 0, y: 0}; // Two properties
const point2 = {x: point.x, y: point.y + 1}; // More complex values
const book = {
    "main title": "JavaScript", // Property names include spaces,
    'sub-title': "The Definitive Guide", // and hyphens, so use string literals
    "for": "all audiences", // for is a reserved word, so quote
    author: { // The value of this property is
        firstname: "David", // itself an object. Note that
        surname: "Flanagan" // these property names are unquoted.
    }
};

const o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
const r = new RegExp("js"); // Create a RegExp object for pattern matching.
console.log(r.prototype)

let o2 = Object.create({x:1, y:2})
// to create a null object we do:
let o3 = Object.create(Object.prototype)

// inherit() returns a newly created object that inherits properties from the
// prototype object p. It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.
function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create) // If Object.create() is defined...
        return Object.create(p); // then just use it.
    let t = typeof p; // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {} // Define a dummy constructor function.
    f.prototype = p; // Set its prototype property to p.
    return new f(); // Use f() to create an "heir" of p.
}
let author = `${book.author.firstname} ${book.author.surname} `
let name = book.author.surname
let title = book['main title']

console.log(`the author ${name} wrote ${title} his fullwhen someone sent the work, he can download it back by clicking at the button next to the workwhen someone sent the work, he can download it back by clicking at the button next to the workname is ${author}`)


let o = {} // o inherits object methods from Object.prototype
o.x = 1; // and has an own property x.
let p = inherit(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = inherit(p); // q inherits properties from p, o, and Object.prototype
q.z = 3; // and has an own property z.
let s = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3: x and y are inherited from o and p

let unitcircle = { r:1 }; // An object to inherit from
let c = inherit(unitcircle); // c inherits the property r
c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
unitcircle.r; // => 1: the prototype object is not affected


// A verbose and explicit technique
let len = undefined;
if (book) {
    if (book.subtitle) len = book.subtitle.length;
}
// A concise and idiomatic alternative to get subtitle length or undefined
len = book && book.subtitle && book.subtitle.length;

//  Deleting Properties

// Surprisingly, delete does not operate on the
// value of the property but on the property itself:

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

o.propertyIsEnumerable("toString") // => false: not enumerable
for(p in o) // Loop through the properties
    console.log(p); // Prints x, y, and z, but not toString


for(p in o) {
    if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
}
for(p in o) {
    if (typeof o[p] === "function") continue; // Skip methods
}

/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(o, p) {
    for(prop in p) { // For all props in p.
        o[prop] = p[prop]; // Add the property to o.
    }
    return o;
}
/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is left alone.
 * This function does not handle getters and setters or copy attributes.
 */
function merge(o, p) {
    for(prop in p) { // For all props in p.
        if (o.hasOwnProperty[prop]) continue; // Except those already in o.
        o[prop] = p[prop]; // Add the property to o.
    }
    return o;
}

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
    for(prop in o) { // For all props in o
        if (!(prop in p)) delete o[prop]; // Delete if not in p
    }
    return o;
}

/*
 * For each property of p, delete the property with the same name from o.
 * Return o.
 */
function subtract(o, p) {
    for(prop in p) { // For all props in p
        delete o[prop]; // Delete from o (deleting a
        // nonexistent prop is harmless)
    }
    return o;
}

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from p are used.
 */
function union(o,p) { return extend(extend({},o), p); }
/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o,p) { return restrict(extend({}, o), p); }
/*
 * Return an array that holds the names of the enumerable own properties of o.
 */
function keys(o) {
    if (typeof o !== "object") throw TypeError(); // Object argument required
    let result = []; // The array we will return
    for(let prop in o) { // For all enumerable properties
        if (o.hasOwnProperty(prop)) // If it is an own property
            result.push(prop); // add it to the array.
    }
    return result; // Return the array.
}
//
// Properties defined by getters and setters are sometimes known as accessor
// properties to distinguish them from data properties that have a simple value.




