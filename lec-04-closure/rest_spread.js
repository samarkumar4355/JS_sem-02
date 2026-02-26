// let arr = [23,1,45,67];

// let brr = [...arr]; //spread operator

// console.log(brr);









// let arr = [23,1,45,67];
// let brr = [23,100,500];

// let ans  = [...arr, ...brr,3000,4000]; // dono array ko ans array me upload kr dega and 3000 , 4000 ko bhi add kr dega

// console.log(ans);








function display(...arr){   // yahan pe iss 3 dot ko rest operrator bolte h 
    console.log(arr);
}

display(12,2,3,45,6,7,8);
