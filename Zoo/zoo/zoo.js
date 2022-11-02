
let ZooModel = require('./zooModel');

class Zoo{
    zooModel =new ZooModel();

    constructor(animalesZoo,foodSupply){
       this.animalesZoo =animalesZoo; 
       this.foodSupply=foodSupply

    }    
    
    print_the_animals(){
        this.animalesZoo.forEach(element=>{
            console.log(element);
        })
    }   


    feeding_zoo(){       
      this.zooModel.feed_animals(this.animalesZoo,this.foodSupply);
        
    }

 
}


module.exports = Zoo;