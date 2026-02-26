// promises

const mypromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let num = Math.random();
        if(num<5){
            resolve(`this promise is fullfillef ${num}`);
        }else{
            reject(`this promise is rejected ${num}`);
        }
       
    }, 2000);
})

console.log(mypromise);

mypromise().then((response)=>{
    console.log(response);
}).catch(err=>{
    console.log(err);
})