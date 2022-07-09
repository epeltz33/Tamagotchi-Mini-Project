// Tamagotchi

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

// Create a constructor function for your Tamagotchi

class pet {
    constructor(name, age, hunger, sleepiness, boredom) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }
    // methods for your Tamagotchi that will update its stats
    feed() {
        this.hunger -= 10;
    }
    sleep() {
        this.sleepiness -= 10;
    }
    play() {
        this.boredom -= 10;
    }
    update() {
        this.age += 1;
        this.hunger += 10;
        this.sleepiness += 10;
        this.boredom += 10;
    }
}



