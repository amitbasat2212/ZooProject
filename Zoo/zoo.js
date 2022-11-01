
class Zoo{
    constructor(animalesZoo,foodSupply){
       this.animalesZoo =animalesZoo; 
       this.foodSupply=foodSupply

    }    
    
    print_the_animals(){
        this.animalesZoo.forEach(element=>{
            console.log(element);
        })
    }

    feeding_zoo(NumDays){
        for(let i=0;i<NumDays.length;i++){
            const typeFoodAnimal = this.animalesZoo[i].food_type;
            const dailyQunitlyAnimal = this.animalesZoo[i].dailyQunitly;
            if(this.foodSupply[typeFoodAnimal]>=dailyQunitlyAnimal){
                this.foodSupply[typeFoodAnimal]-=dailyQunitlyAnimal;
            }else{
                this.print_the_supplay_is_out(typeFoodAnimal)
                this.refial_supply(typeFoodAnimal)
            }
        }
    }
    refial_supply(type){        
        this.feeding_zoo[type]+=2;
    }
        
    print_the_supplay_is_out(type){
        console.log(`the supply need refial in ${type}`)
    }
}


module.exports = Zoo;