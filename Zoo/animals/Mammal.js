let Animal = require('./Animal.js')
class Mamal extends Animal{
    constructor(name, species, food_type,dailyQunitly,duration ){
       super(name,species,food_type,dailyQunitly)
       this.duration =duration ;
      
    }
      
}

module.exports = Mamal;
   
   
   

    



