class Animal {
 constructor(name, species, foodType,dailyQunitly){
    this.name = name;
    this.species = species;
    this.food_type = foodType; 
    this.daily_qunitly = dailyQunitly;  
   
 }
    set_daily_qubity(foodDaily){
        this.dailyQunitly=foodDaily;
    }
}

module.exports = Animal;





