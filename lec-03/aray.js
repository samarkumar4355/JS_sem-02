// let arr =[23,45,12,"vikas",true,()=>{},34];
//array hetro in nature. // means an array can store different data types at once in an array
// console.log(arr);   //o/p => Ek line me array print hoti h 

// for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);        // vetical direction me array ki element print hoti h 
    
// }


// inbuild array methods

// arr.push(40);
// console.log(arr);






// let arr=[23,45,12,"vikas",true,()=>{},34];
// console.log(arr);

// arr.pop();  //pop se last ka element remove ho jata h 
// console.log(arr);
// arr.shift(); //shift se startig ka element move ho jata h 
// console.log(arr);
// // arr.unshift("delhi");
// // console.log(arr);







// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];


// // console.log(fruits.slice(1,3)); // ya toh slice jo bna usko kisi variable me store kra lo fir print karao, ya fir aise kr lo 

// // let myfryuits=fruits.slice(1,3);
// // console.log(myfryuits);
// // console.log(fruits);    //slice use krne se jo element chahiye woh milti h, isse element pe koi pharak nhi padta h 



// fruits.splice(1,2,"depesh",34,"mirai","hi",true,()=>{}); // 1st index mtlb jahan se start krni h splice and 2nd index mtlb kitne element remove krne h 

// console.log(fruits);   // splice original  array ko change kr deta h 






// let arr=[23,45,12,"vikas",true,()=>{},34,[34,23,12]];
// for (let element of arr) {    // element ki jagah kuchh bhi ho sakta h 
//     console.log(element);
    
// }

// console.log(arr[7][1]);  // ye 7th element ke 2nd index ko print karega 







// let arr=[23,45,12,"vikas",true,()=>{},34,[34,23,12]];

// // console.log(typeof(arr));   // o/p=> object 
// // console.log(arr[0]);
// for (let key in arr) {     //yahan pe key ka matlb index of array hota h 
//     console.log(key,arr[key]);
    
    
// }