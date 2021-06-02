// 1. Get 1 to 255 - Write a function that returns an array 
// with all the numbers from 1 to 255.

var array = [];
function one(){
   for(var i = 1; i < 256; i++){
      array.push (i)

} return array;
}

console.log(one());



// 2. Get even 1000 - Write a function that would get the sum 
// of all the even numbers from 1 to 1000.  You may use a modulus 
// operator for this exercise.

var sum = 0
function two(){
   for(var i = 1; i < 1001; i++){
      if (i % 2 == 0){
            sum = sum + i }
} return sum;
}

console.log(two());



// 3. Sum odd 5000 - Write a function that returns the sum of all 
// the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

var sum = 0
function three(){
   for(var i = 1; i < 5000; i++){
      if (i % 2 !== 0){
            sum = sum + i }

} return sum;
}

console.log(three());


// 4. Iterate an array - Write a function that returns the sum of 
// all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

var array = [1,2,7];
var sum = 0

function four(){
   for(var i=0; i < array.length; i++){
         sum += array[i]; 
      }
   return sum;
}

console.log(four(array));

// 5. Find max - Given an array with multiple values, write a 
// function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)


var array = [1,5,10,-2];
x = 0;

function five(){
      x = (Math.max.apply(Math, array));
      return x;
}
console.log(five());

// 6. Find average - Given an array with multiple values, write a 
// function that returns the average of the values in the array. (e.g. 
// for [1,3,5,7,20] average is 7.2)

var array = [1,3,5,7,20]
var factors =[]
var avg = 0;
var sum = 0;

function six(){
   for(var i=0; i<array.length; i++){
      sum += array[i];
   }
   var avg = (sum/array.length);
   factors.push (avg);

   return avg;
}
console.log(six());

// 7. Array odd - Write a function that would return an array of 
// all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). 
// Hint: Use 'push' method.

var array = []

function seven() {
   for(var i = 1; i < 50; i++){
      if (i % 2 != 0) {
            array.push(i);
      }
      }
   return array
}
console.log(seven());

// 8. Greater than Y - Given value of Y, write a function that takes
//  an array and returns the number of values that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
// (There are two values in the array greater than 3, which are 5, 7).

var array = [1,3,5,7,9,10,12]
var y = 3;
var count = 0;

function eight() {
   for(var i=0; i < array.length; i++){
      if (array[i] > y) {
            count += 1;
      }
      }
   return count
}
console.log(eight());


// 9. Squares - Given an array with multiple values, write a function that 
// replaces each value in the array with the value squared by itself. 
// (e.g. [1,5,10,-2] will become [1,25,100,4])

var array = [1,5,10,-2];

function nine(){
   for(var i=0; i < array.length; i++){
      array[i] = Math.pow(array[i], 2)
      }
      return array;
}
console.log(nine());


// 10. Negatives - Given an array with multiple values, write a function 
// that replaces any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values. 
// (e.g. [1,5,10,-2] will become [1,5,10,0])

var array = [1,5,10,-2]

function ten(){
   for(var i=0; i<array.length; i++){
      if (array[i] < 0) {
         array[i] = 0
      }
   }
   return array;

}
console.log(ten());


// 11. Max/Min/Avg - Given an array with multiple values, write a function 
// that returns a new array that only contains the maximum, minimum, 
// and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

var array = [1,5,10,-2]
var factors =[]
var avg = 0;
var sum = 0;

function eleven(){
   for(var i=0; i<array.length; i++){
      sum += array[i];
   }
   factors.push(Math.max.apply(Math, array));
   factors.push (Math.min.apply(Math, array));
   var avg = (sum/array.length);
   factors.push (avg);

   return factors;
}
console.log(eleven());


// 12. Swap Values - Write a function that will swap the first and last 
// values of any given array. The default minimum length of the array is 2. 
// (e.g. [1,5,10,-2] will become [-2,5,10,1]).

var array = [1,5,10,-2]
var temp = 0;
var x = 0;

function twelve(){
   x = array.length
   temp = array[0];
   array[0] = array[x-1];
   array [x-1] = temp;
   return array;
}

console.log(twelve());

// 13. Number to String - Write a function that takes an array of numbers 
// and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

var array = [-1,-3,2,14,0,-4]
function thirteen (){
   for(var i=0; i < array.length; i++){
      if (array[i] < 0){
            array[i]="Dojo";
      }
}
   return array
}

console.log(thirteen());
