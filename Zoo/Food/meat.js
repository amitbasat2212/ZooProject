let Food = require('./Food.js')
class Meat extends Food{
    constructor ( grams ){
        super(grams);
    }
}

module.exports = Meat;

