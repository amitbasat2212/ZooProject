let Animal = require('./Animal.js')
class Fish extends Animal{
    constructor(name, species, food_type,dailyQunitly,lowest_depth){
       super(name,species,food_type,dailyQunitly)
       this.lowest_depth=lowest_depth;
      
    }
      
}


module.exports = Fish;
   
   
   

    



