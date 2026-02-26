function memo(fn){
     let fibo = 0;
     return function(n){
       if(fibo[n]){
        return fibo[n];
       }else{
         fibo[n] = fn(n);
         return fibo[n];
       }
     }
}


let fibo = function(){
    if( n == 1 || n == 0){
    return n;
   }


   return fibo(n-1)+fibo(n-2);
}




let ans = memo(fibo);
console.log(ans(5));
