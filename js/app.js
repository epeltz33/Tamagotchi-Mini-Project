// Tamagotchi

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

// Create a constructor function for your Tamagotchi

class Tamagotchi {
    constructor(name, age, hunger, sleepiness, boredom) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    };
     
    ageIncrement() {
        this.age++;
        this.hunger++;
        updateStats();
        changePic();
        };

    feed() {
        if (this.hunger > 10) {
            return "Your Tamagotchi is full!";
            else if (this.hunger < 1){
                this.hunger = 0; // reset the counter to zero
                }
                else{
                    this.hunger--;
                 }
                 updateStats();
                 }   // decrement the counter by one 
            }
     
    }

    