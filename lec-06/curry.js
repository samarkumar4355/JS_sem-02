function add(a,b){
    return a+b;
}

// add(2,3);  //5
//  add(2)(3)();//5



function sum(a){
    return function(b){
        return a+b;
    }
}

// console.log(sum(2)(3));  //5

let ans=sum(4);   // yahan pe returned function aa jayega and value of a will be replaced by 4 only
console.log(ans);


let res = ans(2);
console.log(res);