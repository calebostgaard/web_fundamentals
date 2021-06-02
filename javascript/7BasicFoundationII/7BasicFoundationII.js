// // 1. Biggie Size - Given an array, write a function that changes all positive 
// numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns 
// that same array, changed to [-1, "big", "big", -5].

var array = [-1,3,5,-5]
function one (){
    for(var i=0; i < array.length; i++){
        if (array[i] > 0){
            array[i]="big";
    }
}
    return array
}

console.log(one());



// // 2. Print Low, Return High - Create a function that takes in an array of numbers.
//   The function should print the lowest value in the array, and return the highest 
//   value in the array.

var array = [1,5,10,-2]
var max = 0;
var min = 0;

function two(){
    min = Math.min.apply(Math, array);
    max = Math.max.apply(Math, array);
    console.log(min);
    return max;

}
console.log(two());

// // 3. Print One, Return Another - Build a function that takes in an array of numbers.
//   The function should print the second-to-last value in the array, and return the 
//   first odd value in the array.

var array = [2,5,10,3,-2]
var sec2last = 0;
var firstodd = 0;

function three(){
    sec2last = array[array.length-2];
    console.log(sec2last);

    for(var i=0; i<array.length; i++){
        if (array[i] % 2 != 0){
            firstodd = array[i];
            break;
        }
    }
    return firstodd;
}
console.log(three());


// // 4. Double Vision - Given an array (similar to saying 'takes in an array'), create
//  a function that returns a new array where each value in the original array has been 
//  doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

var array = [2,5,10,3,-2]
var newarray = []

function four() {
    for(var i=0; i < array.length; i++){
        newarray.push (array[i] * 2);
        }
    return newarray

}

console.log(four());



// // 5. Count Positives - Given an array of numbers, create a function to replace the 
// last value with the number of positive values found in the array.  
// Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

var array = [2,5,-2,4,10,3,-2]
var sum = 0

function five() {
    for(var i=0; i < array.length; i++){
        if (array[i] > 0){
            sum += 1;
        }
    }

    array[array.length - 1] = sum
    return array

}

console.log(five());

// // 6. Evens and Odds - Create a function that accepts an array.  Every time that array
//  has three odd values in a row, print "That's odd!".  Every time the array has three 
//  evens in a row, print "Even more so!".

var array = [2,5,5,7,2,3,4,4,10,3,2,2,2,3,-2]
var sumodd = 0
var sumeven = 0

function six() {
    for(var i=0; i < array.length; i++){
        if(array[i]%2!=0 && array[i+1]%2!=0 &&  array[i+2]%2!=0) {
            console.log("That's odd!");
        }
        else if(array[i]%2==0 && array[i+1]%2==0 &&  array[i+2]%2==0) { 
            console.log("Even more so!");    
            }
        }
}
(six());


// // 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other 
// element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
// Afterward, console.log each array value and return arr.

var array = [3,5,2,7,8,5,0]

function seven() {
    for(var i=0; i < array.length; i++){
        if (i % 2 != 0) {
            array[i] += 1;
        }
        }
    return array
}
console.log(seven());


// // 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array'
//  or 'given an array') containing strings.  Working within that same array, replace each 
//  string with a number - the length of the string at the previous array index - and return 
//  the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
//   Hint: Can for loops only go forward? 

WRONG

var array = ["dog","heat","1","cat","pair"] 
// --> [3,1,4,2,8,5,0]

function eight() {
    for(var i=array.length-1; i > 0; i--){
        if(typeof array[i] == 'string') {
            array[i] = array[i-1].length;
        }
    }
    return array;
}
console.log(eight());


// // 9. Add Seven - Build a function that accepts an array. Return a new array with all 
// the values of the original, but add 7 to each. Do not alter the original array.  
// Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

var array = [2,5,10,3,-2]
var newarray = []

function nine() {
    for(var i=0; i < array.length; i++){
        newarray.push (array[i] + 7);
        }
    return newarray

}

console.log(nine());

// // 10. Reverse Array - Given an array, write a function that reverses its values, in-place. 
//  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed
//   like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

var array = [2,5,10,3,-2]
var x = array.length;
var temp = 0;

function ten(){
    for(var i = 0; i < x/2; i++) {
        var temp = array[i];
        array[i] = array[x-i-1];
        array[x-i-1] = temp;
    }
        return array;
}
console.log(ten());


// // 11. Outlook: Negative - Given an array, create and return a new one containing all 
// the values of the original array, but make them all negative (not simply multiplied by -1). 
// Given [1,-3,5], return [-1,-3,-5].

var array = [2,-5,10,0,-2]
var newarray = []

function eleven() {
    for(var i=0; i < array.length; i++){
        if (array[i] > 0) {
        newarray.push (array[i] * -1);}

        else if(array[i] <= 0) 
            newarray.push (array[i]);
        }
    return newarray
}

console.log(eleven());

// // 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each 
// time one of the values is equal to "food".  If no array values are "food", then 
// print "I'm hungry" once.

var array = [2,"food",10,0,-2,"food"]

function eleven() {
    for(var i=0; i < array.length; i++){
        if (array[i] == "food") {
        console.log("yummy");}

        else if(array[i] !== "food") 
        console.log("I'm hungry");
        }
        return;
}

(eleven());

// // 13. Swap Toward the Center - Given an array, swap the first and last values, third and 
// third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns 
// the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the 
// array into [6,2,4,3,5,1].  No need to return the array this time.

var array = [1,2,3,4,5,6]
var x = array.length;
var temp = 0;

function thirteen(){
    for(var i = 0; i < x/2; i++) {
        if (i % 2 == 0) {
            var temp = array[i];
            array[i] = array[x-i-1];
            array[x-i-1] = temp;}
        }
}
(thirteen());

// // 14. Scale the Array - Given an array arr and a number num, multiply all values in the
//  array arr by the number num, and return the changed array arr.  For example, 
//  scaleArray([1,2,3], 3) should return [3,6,9].

var array = [1,2,3]
var num = 3

function fourteen() {
    for(var i=0; i < array.length; i++){
        array[i] *= num;
        }
    return array

}

console.log(fourteen())