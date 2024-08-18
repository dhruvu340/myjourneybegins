
function cheese(){
  return new Promise((resolve,reject) => {setTimeout(()=>{
    let cheese= 'cheese1';
    resolve(cheese)
    }
    ,1000)
    })}

    function dough(cheese){
        return new Promise((resolve,reject) => {setTimeout(()=>{
          let dough= 'dough';
          resolve(dough)
          }
          ,1000)
          })}


          function pizza(dough){
            return new Promise((resolve,reject) => {setTimeout(()=>{
              let dough= 'cheese1';
              resolve(dough)
              }
              ,1000)
              })}
   

             cheese().then(
                (cheese)=>{return dough(cheese)}
             ).then((dough)=>{;console.log("ready");
             
                return pizza(dough)})