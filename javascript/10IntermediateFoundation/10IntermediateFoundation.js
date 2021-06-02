// Intermediate Foundation

// 1. Sigma - Implement function sigma(num) that, given a number, 
// returns the sum of all positive integers up to the given 
// number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

var sum = 0

function one(num){
    for(var i=0; i <= num; i++){
        sum += i;
    }
        return sum;
}


console.log(one(5));


// 2. Factorial - Write a function factorial(num) that, given 
// a number, returns the product (multiplication) of all positive 
// integers from 1 up to the given number (inclusive).  For example, 
// factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

var mult = 1;
function two(num){
    for(var i=1; i <= num; i++){
        mult *= i;
    }
    return mult;
}
console.log(two(5));

// 3. Fibonacci - Create a function to generate Fibonacci numbers.  
// In this famous mathematical sequence, each number is the sum of 
// the previous two, starting with values 0 and 1.  Your function 
// should accept one argument, an index into the sequence (where 0 
// corresponds to the initial value, 4 corresponds to the value 
// four later, etc).  Examples: fibonacci(0) = 0 (given), 
// fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), 
// fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  
// Do this without using recursion first.  If you don't know what 
// a recursion is yet, don't worry as we'll be introducing this 
// concept in Part 2 of this assignment.

var arr = [0,1]
var fibsum = 0;
function three(num){
    for(var i=1; i < num; i++){
        arr.push(arr[i]+arr[i-1]);
    }
    fibsum = arr[num]
    return fibsum;
}
console.log(three(7));

// 4. Array: Second-to-Last: Return the second-to-last element of an 
// array. Given [42, true, 4, "Liam", 7], return "Liam".  If array 
// is too short, return null.

var i = 0;
function four(arr){
    if(arr.length>1){
        i = arr[arr.length - 2];}
    else {return "null"
    }
    return i;
}
console.log(four([4,3,5]));

// 5. Array: Nth-to-Last: Return the element that is N-from-array's-end.
// Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

var i = 0;
function four(arr, num){
    if(arr.length>1){
        i = arr[arr.length - num];}
    else {return "null"
    }
    return i;
}
console.log(four([4,3,5,5,3,7,9], 3));


// 6. Array: Second-Largest: Return the second-largest element of an 
// array. Given [42,1,4,3.14,7], return 7.  If the array is too 
// short, return null.

// Variation 1: //
function six(arr){
    if(arr.length>1){
        var sectopvalue = arr[0];
        var topvalue = arr[1];
        var temp = 0;
        if (arr[1] > arr[0]){
            // sectopvalue = arr[1]; 7
            topvalue = arr[0]; 
        }
        for(var i=0; i < arr.length; i++){
            if (arr[i]>=sectopvalue){
                sectopvalue=arr[i];
                if (sectopvalue>topvalue){
                    temp=topvalue;
                    topvalue=sectopvalue;
                    sectopvalue=temp;}
            }
    }
    return sectopvalue;
}
else {return null}
}
console.log(six([9,7,3,5,-1]))


// // Varation 2: (however, takes the max out of original array - bad if needed later)//
// function six(arr){
//     var max = 0;
//     var twomax = 0;
//     if (arr.length > 1){
//         max = (Math.max.apply(Math,arr));
//         arr.splice(arr.indexOf(max), 1);
//         twomax = (Math.max.apply(Math,arr));
//     }
//     else {
//         twomax=null;
//     }
//     return twomax;
// }
// console.log(six([2,4,7,5,9,6,2,1,13]))


// 7. Double Trouble: Create a function that changes a given array 
// to list each existing element twice, retaining original order.  
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function eight(arr){
    var doubarry = []
    for (var i=0; i < arr.length; i++){
        doubarry.push(arr[i]);
        doubarry.push(arr[i]);
        }
    return doubarry
}
console.log(eight([1,2,3,4,5,6]));



// WRONG ATTEMPT:
// function eight(arr){
//     var doubarry = []
//     var arrlength = arr.length
//     for (var i=0; i < arrlength/2; i++){
//         arr.push(arr[i])}
//     var temp = 0;
//     for (var i= 0; i < arr.length; i++){
//         temp = arr[arr.length/2]
//         arr[arr.length/2] = arr[i+1]
//         arr[i+1] = temp
//     }
//     return arr
// }
// console.log(eight([1,2,3,4,5,6]));

// [1,2,3,4,5,6,6,2,3,4,5,6]
