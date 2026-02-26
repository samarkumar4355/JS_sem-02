// for (let key in arr) {
//     console.log(key,arr[key]);
    
    
// }


//1st Question

// console.log(add(10, 20));   // o/p   add is not a function

// var add = function(a, b) {
//   return a + b;
// };
// console.log(add(10, 20));  // o/p 30 if above console not work


// Explanation : This output occurs because var got hoisted but it's value is below console 



// //question number 6

// let arr = [];
// arr.push(23);
// arr.push(65);

// console.log(arr);

// arr.pop();
// console.log(arr);


// arr.unshift("samar");
// console.log(arr);

// arr.shift();
// console.log(arr);



//Question number 7

// let nums = [10, 20, 30, 40, 50];

//  let mynums = nums.slice(1,3);
//  console.log(mynums);


//  nums.splice(2,1);/
//  console.log(mynums);
//  console.log(nums);

// 






// // mcq question 7
// function outer() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// let fn1 = outer();
// fn1();
// fn1();


// function test() {
//     let  x = 10;
//     return function () {
//         return x;
//     };
// }

// let a = test();
// let b = test();

// console.log(a() === b());




// function createCounter() {
//     let count = 5;
//     return {
//         inc() {
//             count++;
//         },
//         get() {
//             return count;
//         }
//     };
// }

// let c1 = createCounter();
// console.log(c1.get());
// let c2 = createCounter();

// c1.inc();
// c1.inc();
// console.log(c1.get()); // 7
// console.log(c2.get()); // 5

// function outer(a) {
//     return function inner(b) {
//         return a + b;
//     };
// }

// let add5 = outer(5);
// console.log(add5(10));

// function outer() {
//     let x = 1;
//     return function () {
//         x++;
//         return x;
//     };
// }

// let f1 = outer();
// let f2 = f1;

// console.log(f1());
// console.log(f2());



function makeFunctions() {
    let arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            return i;
        });
    }
    return arr;
}

let fns = makeFunctions();  //[fn,fn,fn]
console.log(fns[0](), fns[1](), fns[2]());

//kya hoga agar let i ki jagah var i se declare hoga loop me
