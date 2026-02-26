console.log("hmmm...");

setTimeout(()=>{
    console.log("hi"); // 0 sec time rahega fir bhi woh queue me jayega hi jayega toh fir phle dil print hoga and then 0sec wala chalega
},0);


setTimeout(()=>{
    console.log("mera");
},0);

console.log("dil");