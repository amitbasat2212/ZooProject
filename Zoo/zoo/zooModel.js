let Food = require('../Food/Food');
const Zoo = require('./zoo');
class ZooModel{

    defultRefiel =200;
    check_if_empty(typeFoodAnimal,foodSupply){
        if(foodSupply[typeFoodAnimal]===undefined){                             
           foodSupply[typeFoodAnimal]=new Food(0);
          
        }
       
   }
   
   feed_animals(animalesZoo,foodSupply){  
        for(let i=0;i<animalesZoo.length;i++){
            this.feed_animal(animalesZoo,foodSupply,i)
        }
    
       
    }  
    
    feed_animal(animalesZoo,foodSupply,index){        
            let typeFoodAnimal = animalesZoo[index].getFoodType();
            let dailyQunitlyAnimal = animalesZoo[index].getDailyQubity();       
            
            this.check_if_empty(typeFoodAnimal,foodSupply);    
        
            if(foodSupply[typeFoodAnimal].getAmountOfFood()>=dailyQunitlyAnimal){
                const amount = foodSupply[typeFoodAnimal].getAmountOfFood()-dailyQunitlyAnimal;
                foodSupply[typeFoodAnimal].setAmountOfFood(amount);            
                
            }else{
                this.print_the_supplay_is_out(typeFoodAnimal)
                this.refial_supply(typeFoodAnimal,foodSupply)
            }
        }


    refial_supply(type,foodSupply){        
        const amount = foodSupply[type].getAmountOfFood()+this.defultRefiel;
        foodSupply[type].setAmountOfFood(amount);         

    }

    print_the_supplay_is_out(type){
        console.log(`the supply need refial in ${type}`)
    }
}

module.exports = ZooModel;