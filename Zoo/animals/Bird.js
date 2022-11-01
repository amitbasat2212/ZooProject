let Animal = require('./Animal.js')
class Bird extends Animal{
    constructor(name, species, food_type,daily_qunitly,WingSpan ){
       super(name,species,food_type,daily_qunitly)
       this.WingSpan =WingSpan ;
      
    }
      
}
   
module.exports = Bird;
   
   

    



