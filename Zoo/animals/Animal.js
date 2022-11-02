class Animal {
 constructor(name, species, foodType,dailyQunitly){
    this.name = name;
    this.species = species;
    this.foodType = foodType; 
    this.dailyQunitly = dailyQunitly;  
   
 }
    getDailyQubity(){
        return this.dailyQunitly
    }
    getFoodType(){
        return this.foodType
    }


}

module.exports = Animal;





