//function and variables dono hi heap memory me store hoti h // obj ke andar bas uska address jata h 
//data abstraction












function makeFunctions() {
    let arr = [];  // yahan pe memory block lexical environment me hai toh value yahi pe aakar store hogi 
    for (let i = 0; i < 3; i++) {    // agar let ko var se replace kr de toh memory block me 3 store hoga and agar let h toh 1 2 3 store hoga 
        arr.push(function () {
            return i;           // ye i koarray me push karega 
        });
    }
    return arr;  // yahan pe finally array return hoga jo ki fns me jayega 
}

let fns = makeFunctions();  //[fn,fn,fn]
console.log(fns[0](), fns[1](), fns[2]());
console.log(fns);

//kya hoga agar let i ki jagah var i se declare hoga loop me
