// Objectives

// Practice iterating through an array of objects/dictionaries.
// Imagine that you are given an array of objects.  For example,

var users = [
   {
      name: "Michael",
      age: 37
   },
   {
      name: "John",
      age: 30
   },
   {
      name: "David",
      age: 27
   }
];


// 1. How would you print/log John's age?
console.log(users[1].name);

// 2. How would you print/log the name of the first object?
console.log(users[0].name);


// 3. How would you print/log the name and age of each user using a for loop?  Your output should look something like this
      // Michael - 37
      // John - 30
      // David - 27
console.log(users[0].name,"-", users[0].age);
console.log(users[1].name,"-", users[1].age);
console.log(users[2].name,"-", users[2].age);


