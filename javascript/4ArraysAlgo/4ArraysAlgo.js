// 1. Print Values and Sum
// Expected Output:
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21


var testArr = [6,3,5,1,2,4]
var sum = 0

for(var i = 0; i < testArr.length; i++) {
    sum += testArr[i]
    console.log(`Num ${ testArr[i]}, Sum ${sum}`);
}


// 2. Value * Position
// Expected output: [0,3,10,3,8,20]

var testArr = [6,3,5,1,2,4];

for(var x = 0; x < testArr.length; x++) {
    testArr[x] = testArr[x] * x;
}

console.log(testArr); 

