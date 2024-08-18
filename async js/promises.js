const fs= require('fs');


function readfile(file){
const p=new Promise((resolve,reject)=>{

fs.readFile(file,"utf-8",(err,data)=>{
    if (!err){reject("sorry")
}
       else{resolve(data)} 
    
})


})
return p
}

function callback(data){
    console.log(data);
}
readfile("file.txt").then(callback).catch(callback)