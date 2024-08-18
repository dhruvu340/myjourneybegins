class rectaangle{
constructor(widht,height){
    this.height=height;
    this.widht=widht;

}

area(){
    return this.widht*this.height;}

delete(){

   for(let key in this)   {
    function destroy(baseObject, key) {
        delete baseObject[key];
      };
    destroy(this,key)
    }

    

}



}


const rect= new rectaangle(2,4);

rect.delete()
console.log(rect)


//date clas

const now= new Date();
console.log(now.getDate())