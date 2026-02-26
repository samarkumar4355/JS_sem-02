// //filter function  // filter ek array return krta hai

let arr = [23,1,2,6,34,23,4];
let ans = arr.filter((element,index, arr)=>{
   if(element >=18){
    return true;
   }else{
    return false;
   }
});

console.log(ans);
