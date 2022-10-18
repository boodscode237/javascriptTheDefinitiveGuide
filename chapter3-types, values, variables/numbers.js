let inf = Infinity
let plusInf = Number.POSITIVE_INFINITY
console.log(1/0)
console.log(Number.MAX_VALUE * 2)
console.log(inf, plusInf)

let negInf1 = -inf
let negInf = Number.NEGATIVE_INFINITY
console.log(-1/0)
console.log(-Number.MAX_VALUE * 2)
console.log(negInf, negInf1)
let notA_Number = NaN
console.log(notA_Number, Number.NaN, 0/0, Infinity/Infinity)
console.log(Number.MIN_VALUE/2)
console.log(-Number.MAX_VALUE/2)

console.log(isNaN(NaN))
console.log(isNaN(-Infinity))

// Binary Floating-Point

let x = .3 - .2
let y = .2 - .1

console.log(x === y)
console.log(x, y)

let bigInt = BigInt(Number.MAX_SAFE_INTEGER)
console.log(bigInt)
let string = '1' + '0'.repeat(100)
console.log(string,'\n',BigInt(string))

//Dates and Times

let timesatamp = Date.now()
let now = new Date()
let ms = now.getTime()
let mso = now.getUTCDate()
let iso = now.toISOString()
console.log(timesatamp, now, ms, mso, iso)




