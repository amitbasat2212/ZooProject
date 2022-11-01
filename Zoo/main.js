let Zoo = require('./zoo')
let Animal = require('./animals/Animal')
let Bird = require('./animals/Bird');
let Mamal = require('./animals/Mammal');
let Fish = require('./animals/Fish');
let Seeds = require('./Food/seeds');
let Meat = require('./Food/meat');
let alge = require('./Food/alge');
let plankton = require('./Food/plankton');
let worms = require('./Food/worms');



const seeds = new Seeds(7);
const meat = new Meat(8);
const animal1 = new Mamal("Simba","lion","meat",6,10);
const animal2 = new Mamal("Nala","lion","meat",6,12);
const animal3 = new Mamal("Willy","whale","plankton",2000,22 );
const animal4 = new Fish("Nemo","clown fish","algae",3,200);
const animal5 = new Fish("Marlin","clown fish","algae",3,300);
const animal6 = new Bird("Akka","goose","seeds",1,3);
const animal7 = new Bird("Hedwig","owl","worms",100,10 );


const zoo=new Zoo([animal1,animal2,animal3,animal4, animal5,animal6,animal7],{"meat":meat,"seeds":seeds})
zoo.print_the_animals();




