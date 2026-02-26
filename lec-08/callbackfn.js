// callbackfn: these are the functions which are passed as argument/ parameter or retunrned from a function.

function upload(img, cb){
    console.log("img upload started");
    setTimeout(()=>{
        console.log("img uploaded");

        const imgurl = `http://amazonweb.service.s3.bucket/${img}`;
        cb(imgurl,dbupload);
    },2500)
}

function compress(imgurl,cb){
    console.log("compress started");
    setTimeout(()=>{
        console.log("compressed started");
        const compressedurl =imgurl+"/compress";
        cb(compressedurl);
    },4000)
}


function dbupload(compressedurl){
    console.log("DBUpload started");

    setTimeout(()=>{
        console.log("image stored to db");
    },2000);
}

upload("https://myimg", compress);