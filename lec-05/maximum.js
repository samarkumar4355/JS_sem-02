let arr = [23,1,2,6,34,23,4];
let ans = arr.reduce((acc, element)=>{
    if(acc>element){
        acc = element;
    }
    return acc;
},0);

console.log(ans);



