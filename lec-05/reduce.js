// //reduce function 

let arr = [23,1,2,6,34,23,4];

// let ans = arr.reduce(function/callback, initial value of accumulator) // reduce function ke 2 argument hote h 
// let ans = arr.reduce(()=>{},0)  next line ko aise likhte h fir curly braces me 
let ans = arr.reduce((acc,element, index, arr)=>{ // reduce function ke andar jo call back function hota h uske 4 argument hote h
    console.log(acc,element, index, arr);
    acc+=element;    // acc ko update kr rhe h 
    return acc;
},0)  // accumulator ki initial value zero h 

// accumulator ki initial value 0 hai , next iteration me acc ki value 23 ho jayegi 
// last me jo acc ki value hoti h wahi return hoti h and woh ans ke andar store hoti h 
//
 
