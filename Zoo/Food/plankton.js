let Food = require('./Food.js')
class Plankton extends Food{
    constructor (animalName, grams){
        super({animalName, grams});
    }
}

module.exports = Plankton;