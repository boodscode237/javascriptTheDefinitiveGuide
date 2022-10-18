// Working with strings
/*
strings are immutables in JS
 */
let name = 'Boods'
let msg = "Hello, " + 'world'
let greetings = 'Welcome to my channel,' + ' ' + name
console.log(greetings)
console.log(msg.length)

//obtain portion of a string
console.log(msg.substring(1,4)) // 2nd, third and 4th character
console.log(msg.slice(1,4)) // 2nd, third and 4th character
console.log(msg.slice(-3))
console.log(msg.split(','))

// searching a string

console.log(msg.indexOf('l'))
console.log(msg.indexOf('l', 3)) // position of the first l after or at index 3
console.log(msg.indexOf('zz'))
console.log(msg.lastIndexOf('l'))



// Boolean search

console.log(msg.startsWith('Hel'))
console.log(msg.endsWith('!'))
console.log(msg.includes('or'))

// creating a modified version of a string

console.log(msg.replace('llo', 'ya'),'\n' ,msg.toLocaleUpperCase(), '\n', msg.toLocaleLowerCase(), '\n', msg.normalize(), '\n', msg.normalize('NFD'))

// inspect an individual 16bit char of a string
console.log(msg.charAt(0))
console.log(msg.charAt(msg.length - 1))
console.log(msg.charCodeAt(msg.length - 10))
console.log(msg.codePointAt(msg.length - 10))

// string padding functions ES2017

console.log('d'.padStart(3))
console.log('d'.padStart(3, '~'))
console.log('d'.padEnd(3))
console.log('d'.padEnd(3, '~'))

// space trimming functions trim(), trimStart(), trimEnd()

let test = ' test  '
console.log(test.trim(), '\n', test.trimEnd(), '\n', test.trimStart())

let say = 'Hi, dude'

console.log(say.concat('!'))
console.log('==>'.repeat(5))

// Pattern matching

let text = 'testing: 1, 2, 3, 4 , u, 5'
let pattern = /\d+/g
let res = pattern.test(text)
console.log(res)
let searchs = text.search(pattern)
console.log(searchs)

let matchs = text.match(pattern)
console.log(matchs)

console.log(text.replace(pattern, '~'))
console.log(text.split(/\D+/))

let s = Symbol('sym_x')
let y = Symbol('sym_x')
console.log(s, y)
console.log(s == y)














