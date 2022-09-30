class DefaultMap extends Map {
    constructor(defaultValue) {
        super(); // invoke superclass constructor
        this.defaultValue = defaultValue // remember the default value
    }
    get(key) {
        if(this.has(key)) {
            return super.get(key)
        }
        else {
            return this.defaultValue
        }
    }
}

 class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0)
        this.totalLetters = 0
    }

    // update the histogram with the letters of text
     add(text) {
        text = text.replace(/\s/g, '').toUpperCase()
         // loop through the characters of text
        for(let character of text){
            let count = this.letterCounts.get(character)
            this.letterCounts.set(character, count+1)
            this.totalLetters++
        }
     }

     // convert the histogram to a string that display an ASCII graphic
     toString() {
        // convert the map to an array of [key, value] arrays
         let entries = [...this.letterCounts]

         // sort the array by count, then alphabetically
         entries.sort((a,b) => {// function to define sort order
             if(a[1] === b[1]) { // if sort are the same
                 return a[0] < b[0] ? -1 : 1 // sort alphabetically.
             } else { // if the counts differ
                 return b[1] - a[1] // sort by the largest
             }
         })

         // convert the count to percentages
         for(let entry of entries) {
             entry[1] = entry[1] / this.totalLetters * 100
         }

         // drop any  entries less than 1%
         entries = entries.filter(entry => entry[1] >= 1)

         // Now convert each entry to a line of text
         let lines = entries.map(
             ([l,n]) => `${l}: ${'#'.repeat(Math.round(n))} ${n.toFixed(2)}%`
         )

         // and return the concatenated lines, seperated by newline characters
         return lines.join('\n')
     }
 }

 async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8") // read unicode strings, not bytes
     let histogram = new Histogram()
     for await (let chunk of process.stdin) {
         histogram.add(chunk)
     }
     return histogram
 }


 histogramFromStdin().then(histogram => {

     console.log(histogram.toString())
 })

