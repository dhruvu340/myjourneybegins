const fs= require ("fs")
const content = fs.readFileSync("file.txt","utf-8") //SYNCHRONOUSLY
console.log (content)

fs.readFile("FILE2.txt","utf-8",function (err,content) //errorfirst function
{console.log(content)}) //ASYNCHRONOUSLY

function sum(){
    console.log("hello")
}
setInterval(sum,1000);

setTimeout(sum, 1000);