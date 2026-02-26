// JAva script single tead the through run krti h 

    // Js ki file kabhi bhi async nhi hoti woh kuchh functions hote h jo asncsly behave krte h 
    // agar micro me bhi call back function me h and macro me bhi toh fir micro wala phle jata h
    // agar promise and async dono hi aa jaye toh fir phle promise chalega 
    //gettime ms deta h 1jan 1970 se 
    // call stack se API tak jaane me bhi time lagta h. Isliye zero secomd wale bhi baad me execute hota h 


   const id =  setInterval(() => {
        
  
        console.log("hello");
    }, 1000);


    setTimeout(()=>{
        clearInterval(id);
    },6000)



