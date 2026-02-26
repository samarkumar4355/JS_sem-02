// In JavaScript, a closure is a feature function has access to where an inner the variables of its outer (enclosing) function, even after the outer function has finished executing.
function counter (){
    let count=0;
    return function (){
        count++;
        console.log(count);
        
    }
}

let aarav=counter();
// console.log(aarav);
aarav();  //1
aarav();  //2

let mani=counter();
mani();  //1
mani();  //2


// Lexical environment is the memory where variables are stored.
// Closure is when a function remembers and uses that memory later.