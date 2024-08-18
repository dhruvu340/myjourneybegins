// function cheese(){
// setTimeout(()=>{
// let cheese= 'cheese';
// console.log("hey cheese is here");
// return cheese;
// }
// ,3000)
// }
// // console.log(cheese()); ->return undefined

function cheese(callback){
    setTimeout(()=>{
    let cheese= 'cheese1';
    callback(cheese)
    }
    ,3000)
    }

    function dough(cheese,callback){
        setTimeout(()=>{
        let dough= 'cheese1'+'dough';

        callback(dough)
        }
        ,3000)
        }


        function pizza(dough,callback){
            setTimeout(()=>{
            let pizza= "doughpizza";
    
            callback(pizza)
            }
            ,3000)
            }
    cheese((cheese)=>{
        dough(cheese,(dough)=>{
            pizza(dough,(pizza)=>console.log(pizza)
            )
    })
        
    })