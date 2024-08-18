
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


                async function pizzadue() {
                try {  let cheese2 = await cheese()
                    const dough2= await dough(cheese);
                    const pizza= await pizza(dough);

                    console.log("ready");}
                    catch(err){
                        console.log(err);
                        
                    }
                    
                }

                pizzadue()