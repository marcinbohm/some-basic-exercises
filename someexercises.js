/* Functions */

const sum = (a) => (b) => a + b
const sum2 = (a, b) => a + b

Array.prototype.duplicate = function() {
    return this.concat(this)
}

var string = 'This make I am written in reverse'
.split('').reverse().join('');

function asynchrony() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
    }, 0)
    console.log('three');
}

function hello() {
    if ([]) {
        console.log('hello'); // It will work
      }
}

function reverseloop(y){
    for (var i = 0; i < y; i++) {
        console.log((y-1)-i)
    }
}

/* Console output */

console.log(sum(1)(2)) // 3
console.log(sum2(1, 2)) // 3
console.log([1, 2, 3].duplicate()) // [1, 2, 3, 1, 2, 3]
console.log(3+"3") // 33
console.log(string) // esrever ni nettirw ma I ekam sihT
console.log(asynchrony()) // one three two( two will be always after other console logs because its in WEB API, then in message queue)
console.log(hello()) // hello
console.log(reverseloop(10)) // 9 8 7 6 5 4 3 2 1 0

/* Some curio in JS */

// if we alert([1, 2, 3] == [1, 2, 3]) we will get false in return but why? The answer is simple - converted [1, 2, 3] array becomes "1, 2, 3" so [1, 2, 3] == "1, 2, 3" is true
