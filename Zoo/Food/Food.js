class Food {    
    grams;    

    constructor (grams){        
        this.grams = grams;
       
    }

    getAmountOfFood(){
        return this.grams;
    }
    
    setAmountOfFood(amount){
        this.grams=amount;
    }
}

module.exports = Food;

