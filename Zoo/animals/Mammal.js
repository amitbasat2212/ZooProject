let Animal = require('./Animal.js')
class Mamal extends Animal{
    constructor(name, species, food_type,daily_qunitly,duration ){
       super(name,species,food_type,daily_qunitly)
       this.duration =duration ;
      
    }
      
}

module.exports = Mamal;
   
   
   

    



