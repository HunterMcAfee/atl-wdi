console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor (name) {
        this.propertyName = name;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry () {
        this.foodInTummy--;
        console.log(this.foodInTummy, "WAHH!!!");
    }
}

//create new Tamagotchis
let david = new Tamagotchi("David");
let richard = new Tamagotchi("Richard");
david.cry();
richard.cry();

//test out your Tamagotchies below via console.logs
