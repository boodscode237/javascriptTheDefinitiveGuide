let o = {x: 1}
o.x = 2
o.y=3

console.log(o)

let a = [1, 2, 3]
a[0] = 0
a[3] = 4

console.log(a)

let q = {x: 1}, p = {x: 1}, s = q


console.log(q === p)
console.log(q === s)

// reference types

let arr = []
let axe = arr
axe[0] = 5
console.log(arr[0], arr == axe)

// algorithm to copy an array

let d = ['a', 'b', 'c']
let e = []

for (let i = 0; i < d.length; i++){
    e[i] = d[i]
}
console.log(e)

// copy two arrays in ES6

let f = Array.from(d)
console.log(f)

// compare two arrays

function equalsArrays(a, b){
    if (a === b) return true
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return false;
    }
    return true
}

console.log(equalsArrays(f,e))