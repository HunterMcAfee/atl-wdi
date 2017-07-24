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
}

//create new Tamagotchis
let david = new Tamagotchi("David", "Snail");
let richard = new Tamagotchi("Richard", "Gas Monkey");
david.cry();
richard.cry();

//test out your Tamagotchies below via console.logs
