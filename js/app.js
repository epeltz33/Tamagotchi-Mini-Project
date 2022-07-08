// Tamagotchi

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

 // Tamagotchi

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

class Pet{
    constructor( name,) {
      this.name = name;
      this.hunger = 0;
      this.sleep = 0;
      this.boredom = 0;
      this.age = 0;
      this.alive = true;
      this.toggleLights = true; 
    }
    
   };
   // setting up the game object
   const game = {
    timeHandler: 0,
    toggleLights: true,
    petInstance: null,
    start: function(){
        const tamagotchi = new Pet('Tamagotchi');
        this.petInstance = tamagotchi;
        setInterval(function(){
            game.hungerIncreasing();
            game.ageincreasing();
            game.boredomIncreasing();
            game.sleepIncreasing();
            game.displayName();
            game.displayHunger();
            game.toggleLights();
            game.displaySleep();
            game.displayBoredom();
            game.displayAge();
            game.timeHandler = game.timeHandler + 1;
            game.death();
            game.morphe();
            game.animation();
            console.log(game.petInstance);
            }, 1000);
            if (this.petInstance.alive = false){
                console.log('Your Tamagotchi is dead');
                clearInterval(death());
                    
            }
    },
    hungerIncreasing: function(){
        if (this.timeHandler % 10 === 0){
            this.petInstance.hunger = this.petInstance.hunger + 1;
        }
    },
    sleepIncreasing: function(){ 
        if (this.timeHandler % 5 === 0){
            this.petInstance.sleep = this.petInstance.sleep + 1;
        }
        },
    boredomIncreasing: function(){
        if (this.timeHandler % 3 === 0){
            this.petInstance.boredom = this.petInstance.boredom + 1;
        }
    },
    ageincreasing: function(){
        if (this.timeHandler % 4 === 0){
            this.petInstance.age = this.petInstance.age + 1;
            }
            },
            displayHunger: function(){
                         

        
   }