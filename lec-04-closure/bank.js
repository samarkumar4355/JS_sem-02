//example of closure.  // data abstraction
function bank(){
   let balance =0;
   
   let deposit =  (amount) =>{
    balance += amount;
    
   }
   let withdrawal = (amount)=>{
    balance -= amount;
   }
   let mybalance = ()=>{
    console.log(balance);
   }
   return {deposit,withdrawal, mybalance};
}

let tejas=bank();
tejas.deposit(2000);
tejas.mybalance();
tejas.withdrawal(1000);
tejas.mybalance();
