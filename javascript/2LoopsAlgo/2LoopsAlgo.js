//1. Print odds 1-20://


for(var i = 1; i < 20; i+=2){
    console.log(i);
}

//2. Sum and Print 1-5://

var testArr = [1,2,3,4,5]
var sum = 0

for (var i=0; i<5; i++) {
    sum += testArr[i]
    console.log (`Num ${testArr[i]}, Sum ${sum}`)
}