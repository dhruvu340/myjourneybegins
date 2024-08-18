


const p1=new Promise((resolve,reject)=>setTimeout(resolve,1000))
const p2=new Promise((resolve,reject)=>setTimeout(resolve,2000))
const p3=new Promise((resolve,reject)=>setTimeout(resolve,3000))


function callback(){
    console.log('hello')
}

const api= Promise.race([p1,p2,p3])
const api2= Promise.all([p1,p2,p3])
api.then(callback)