// Basic Function I
// Objectives

// 1. Understand how a computer executes each line of code
// 2. Get comfortable with how a function works and how its 
//    return statement works
// 3. Identify some common mistakes students make and learn 
//    how to avoid them

//    Predict the output of the following code snippets.  
// Please do NOT run any of this code directly, but first 
// predict the output using the T-diagram.  If you're not 
// used to using the T-diagram to run through the code yet, 
// please get comfortable now.  This will help you down the line. 
// \Once you've predicted the output for all of the codes, 
// then run the code one by one and compare the two.

// Please turn in a text file that includes your prediction 
// for each problem and the actual output. At the top of the file, 
// indicate how many out of 15 you predicted correctly.

//1. 
function a(){
    return 35;
}
console.log(a())

// Prediction: 35
// Actual: 35

//2. 
function a(){
    return 4;
}
console.log(a()+a());

// Prediction: 8 
// Actual: 8 e

//3. 
function a(b){
    return b;
}
console.log(a(2)+a(4));

// Prediction: 6
// Actual: 6

//4. 
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

// Prediction: 3, 9
// Actual: 3, 9

//5. 
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

// Prediction: 40
// Actual: 40

//6. 
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// Prediction: 4
// Actual: 4

//7. 
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// Prediction: 10, 3, 30
// Actual: 10 3, 30

//8. 
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// Prediction: 3,4,5,6,7,8,9,
//             4,5,6,7,8,9
// Actual: 3,4 (went too fast, trick question! AHA!)

//9. 
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// Prediction: 2,5,8,11 
// Actual: 2,5,8,11 

//10. 
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

// Prediction: 
// 0,1,2,3,4,5,6,7,8,9,90
// 0,1,2,3,4,5,6,7,8,9,90
// Actual:
// 0,1,2,3,4,5,6,7,8,9,0
// 0,1,2,3,4,5,6,7,8,9,0

//11. 
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

// Prediction: no answer - nothing was called
// Actual: no answer - nothing was called

//12. 
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
var z = 10;

// Prediction: no answer - nothing was called
// Actual: no answer - nothing was called

//13. 
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
var z = 10;

// Prediction: undefined - z is within the function a, which was never called on, therefore z cannot be called
// Actual: undefined

//14. 
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
var z = 10;

// Prediction: 15, undefined
// Actual: 15, undefined

//15. 
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

// Prediction: 15, 15
// Actual: 15, 15