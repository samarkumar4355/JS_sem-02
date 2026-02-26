// async function getpost(){
//     const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
//     console.log(res);
// }
// getpost();


// async function getpost(){
//     const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();  // res.json(). this is a promise // jahan kahi bhi json aa gya woh promise hi h 
//     console.log(data);
// }
// getpost();


async function getSinglePost(){

    const res = await fetch ("https://jsonplaceholder.typicode.com/posts/3");  // last me jo digit likha h usko change kr sakte h // jitni inerger hogi utna number wala element aaega


    const data = await res.json();  // res.json(). this is a promise // jahan kahi bhi json aa gya woh promise hi h 
    // console.log(data);
    return data;
}
// getSinglePost();   // returns an object


 const result = getSinglePost();
result.then((a)=>console.log(a));  // A ki jagan kuchh bhi likh sakte h // data bhi , ye mat sochna ki data agar upar use ho gya h toh fir yahan use nhi kr sakte 
