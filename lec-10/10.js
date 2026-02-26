// it resolves promisis 

const p1 = Promise.reject(30);// creates new promise and resolve it
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p2");
    },100)
})


const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p3");
    },150)
})

const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p4");
    },130)
})


// const result2 = Promise.all([p1,p2,p3,p4])
// result2.then((response)=>console.log(response));

// const result2 = Promise.any([p1,p2,p3,p4])
// result2.then((response)=>console.log(response));   // any tab tak wait karega jab tak inn 4 me se atleast koi ek resolve nee ho jaye 

// const result2 = Promise.race([p1,p2,p3,p4])
// result2.then((response)=>console.log(response));    // agr first wala reject ho gya toh fir ek error aaega // and agar resolve hua toh fir usko print karega