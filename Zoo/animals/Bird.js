let Animal = require('./Animal.js')
class Bird extends Animal{
    constructor(name, species, food_type,dailyQunitly,WingSpan ){
       super(name,species,food_type,dailyQunitly)
       this.WingSpan =WingSpan ;
      
    }
      
}
   
module.exports = Bird;
   
   

    



