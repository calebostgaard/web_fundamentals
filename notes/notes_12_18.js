// Array: Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new
// array containing the first array’s elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arr1, arr2){
    var newarr = []
    for (var i=0; i < arr1.length; i++){
        newarr.push(arr1[i]);
    }
    for (var j=0; j < arr2.length; j++){
        newarr.push(arr2[j]);
    }
    return newarr;
}

console.log(arrConcat([3,2,1], [4,5,6]))

// Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any
// elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5],
// change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

// function mintofront(arr){
//     var min = arr[0]
//     var index = 0;
//     var newArr = [];
//     for (i=0; i<arr.length;i++){
//         if (arr[i]< min){
//             min = arr[i];
//             index = i;
//         }
//     }
//     newArr[0] = min;
//     var counter=1;
//     for(i=0; i<arr.length;i++){
//         if (i !== index){
//             newArr[counter] = arr[i];
//             counter++
//         }
//     }
//     return arr;
// }

// console.log(mintofront([4,9,2,5,1,6]))


function mintofront(arr){
    var min = arr[0]
    var index = 0;
    var newArr = [];
    for (i=0; i<arr.length;i++){
        if (arr[i]< min){
            min = arr[i];
            index = i;
        }
    }
    newArr[0] = min;
    var counter=1;
    for(i=0; i<arr.length;i++){
        if (i !== index){
            newArr[counter] = arr[i];
            counter++
        }
    }
    return arr;
}

console.log(mintofront([4,9,2,5,1,6]))

// BONUS:
// Array: Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method
// that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a
// given array’s values. Work in-place, naturally. Do you need to return anything from your function?