let [x, y] = [1, 2]
// [x, y] = [x, y]
// [x, y] = [y, x]
console.log([x, y])

// convert [x, y coordinates to [r, theta]
function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y, x)]
}
// convert [x, y coordinates to [r, theta]
function toCartesian(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y, x)]
}

console.log(toPolar(8, 5))
console.log(toPolar(8, 5)[0])
console.log(toPolar(8, 5)[1])

// convert polar to cartesian coordinates
function toCartesian(r, theta){
    return [r*Math.cos(theta), r*Math.sin(theta)]
}

console.log(toCartesian(toPolar(8, 5)[0], toPolar(8, 5)[1]))

let [a, [d, c]] = [1, [2,3], 4]
console.log(a,d,c)

let [first, ...rest] = "Hello"

console.log(first, rest)

let transperent = {r: 0.0, g: 0.0, b:0.0, a:1.0}
let {r, g, b} = transperent
console.log(r,g,b)

const {cos, sin, tan} = Math
console.log(cos(5), sin(5), tan(sin(5)))