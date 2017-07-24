console.log('tamagotchi file is loaded');

//your class declaration here
class tamagotchi {
    constructor (name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry () {
        this.foodInTummy--;
        console.log(`${this.name} is crying. WAHH!!!`);
    }
    puke () {
        this.foodInTummy--;
        console.log(`${this.foodInTummy} WAHH!!!`)
    }
    yawn () {
        this.restedness--;
        console.log(`${this.name} has current restedness of: ${this.restedness}`);
    }
}

//create new Tamagotchis
let speedy = new tamagotchi("Speedy", "Snail");
let richy = new tamagotchi("Richy", "Gas Monkey");
speedy.cry()
speedy.puke()
speedy.yawn();
richy.cry()
richy.puke()
richy.yawn();

//test out your Tamagotchies below via console.logs
