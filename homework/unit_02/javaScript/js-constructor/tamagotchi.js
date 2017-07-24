console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor (name, creatureType) {
        this.propertyName = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry () {
        this.foodInTummy--;
        console.log(`${this.propertyName} is crying. WAHH!!!`);
    }
    puke () {
        this.foodInTummy--;
        console.log(`${this.foodInTummy} WAHH!!!`)
    }
    yawn () {
        this.restedness--;
        console.log(`${this.propertyName} has current restedness of: ${this.restedness}`);
    }
}

//create new Tamagotchis
let david = new Tamagotchi("David", "Snail");
let richard = new Tamagotchi("Richard", "Gas Monkey");
david.cry()
david.puke()
david.yawn();
richard.cry()
richard.puke()
richard.yawn();

//test out your Tamagotchies below via console.logs
