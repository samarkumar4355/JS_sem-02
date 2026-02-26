// if(3>2){   // this is lexical invironment of for loop
//    
//
//     for(){
//         //..code blocks
//     }
//
// }

// // js me pahle memeory allocate hota h fir execution hota h 






//var => fn scope agar fn andar h

//var => global scope => if it is inside global area

// var a; // global pe aa gya
// if(true){  // yahan pe var global scope me h 
//     var a= 90;  // var intially undefined se hi start krti h ye uska default nature hota h 
// }

// console.log(a);




// function add(){ //yahan pe var function scope me h 
//     //var a; //apne function ke top pe aa gya
//     //..
//     //..

//     var a=90;
// }
// console.log(a);


//function bhi hois hota h 



/********************Execution */


// display();  // There is requirement of calling to execute a function
// function display(){ // function bhi apne lexical environment ke top pe chala jata h , this is one of that's example
//     console.log("hi");
//     console.log(x);
//     var x =90;
//     console.log(x);
    
// }





// var x;
// var i;
// console.log(x);
// console.log(i);

// for( var i =0; i<10; i++){
//    console.log("hi")
//    console.log(x);
// }

// var x=90;
// console.log(x);  // yahan pe output refrenecetial error aaega






// var x =90;
// function display(){
//     console.log(x);  // output 90
//     x++;
// }
// display();
// console.log(x); // output 91






// var x =90;
// function display(){
//     // here is a var inside this function so it would not go for exterior var it will work according to the var inside it
//     console.log(x); // output undefind 
//     x++;  // ye work hi nhi karega  because value of x is below x++, only declaration is above
//     var x =89;
//  console.log(x);
// }
// display();
// console.log(x); // output 90





// var x=90

// function display(){
//     console.log(x);

//      x=189; // ye wahi par jaakar overwrite hoga jahan pe memory allocate hui thi
//     console.log(x);
// }

// display();
// console.log(x); 