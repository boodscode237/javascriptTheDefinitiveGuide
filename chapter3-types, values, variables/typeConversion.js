console.log(null == undefined)
console.log(null === undefined)

let three = Number('3')
let four = Number('4n')
let fau = String(false)

console.log(three, four, String(four*three), fau)
let x = 1
console.log(x+'',x, x+x, x-0, !!x)
let n = 18
let binary = '0b' + n.toString(2)
let octal = '0o' + n.toString(8)
let hex = '0x' + n.toString(16)

console.log(binary, octal, hex)

let num = 12345.6789
console.log(num.toFixed(0))
console.log(num.toFixed(2))
console.log(num.toFixed(3))
console.log(num.toExponential(1))
console.log(num.toExponential(3))
console.log(num.toPrecision(3))
console.log(num.toPrecision(7))
console.log(num.toPrecision(10))

console.log(parseInt('35 people'))
console.log(parseInt('not 35 people'))
console.log(parseFloat('.35 %'))
console.log(parseFloat('not .35 %'))

console.log(parseInt('0101', 2))
console.log(parseInt('0101', 8))
console.log(parseInt('0101', 16))
console.log(parseInt('0101', 32))

let date = new Date(2022, 12, 12, 14, 30, 58)

console.log(date.toString())
console.log(date.valueOf())



