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
            death: function(){
                if(this.petInstance.hunger >= 10 || this.petInstance.sleep >= 10 || this.petInstance.boredom >= 10
                     this.alive = false){
                        this.game = null;
                        this.setInterval = null;
                        this.timeHandler = 0;
                        console.log('Your Tamagotchi is dead');
                     }
                    },

            displayName: function(){
                const $nameContainer = $('#name').val();
                $('#nameDisplay').text(`${this.petInstance.name}`).val();
                ;
            },
            displayAge: function(){
                $('#ageOutput').text(`${this.petInstance.age}`);
            },
            displayHunger: function(){
                $('#hungerOutput').text(`${this.petInstance.hunger}`);
                $('#hungerOutput').val('');
            },
            displaySleep: function(){
                $('#sleepOutput').text(`${this.petInstance.sleep}`);
                $('#sleepOutput').val('');

            },
            displayBoredom: function(){
                $('#boredomOutput').text(`${this.petInstance.boredom}`);
                $('#boredomOutput').val('');
            },
            animation: function(){
                if(this.timeHandler % 3 === 0){
                    $('image').css('padding-right', 0);
                    $('image').css('padding-left', '100px');
                }
                else if(this.timeHandler % 3 === 1){
                    $('image').css('padding-right', '100px');
                    $('image').css('padding-left', 0);
                }
            },
            morphe: function(){
                if(this.petInstance.age % 4 === 0){
                    let move = Math.random();
                    $('#avatarContainer').css('opacity', `${move}`);
                } else {
                    $('#avatarContainer').css('opacity', 1);
                    }
                },
           
                     }
                    

           // Handlers and Listeners for the game
           // feed button
           $('#feed').on('click', (e) => {
            console.log('feed was clicked');
            game.petInstance.hunger = game.petInstance.hunger - 1;
            console.log(`Hunger level is now: ${game.petInstance.hunger}`);
           });

           // toggle lights button
              $('#toggleLights').on('click', (e) => {
                console.log('toggle lights was clicked');
                game.petInstance.sleep = game.petInstance.sleep -= 1;
                $('#numbersContainer').css('background-color', 'rgba(0,0,0,0.5)');
                game.toggleLights = !game.toggleLights;
                if (game.toggleLights === false){
                    game.toggleLights = true;
                    $('#numbersContainer').css('background-color', 'rgba(0,0,0,0)');
                    game.petInstance.sleep  -= 1;
                } else {
                    game.toggleLights = true;
                }
            });
            // play button
            $('#play').on('click', (e) => {
                console.log('play was clicked');
                game.petInstance.boredom = game.petInstance.boredom - 1;
                console.log(`Boredom level is now: ${game.petInstance.boredom}`);
            });
            // Name button
            $('#nameButton').on('click', () => {
                const petNaming = $('#name').val();
                console.log(`${petNaming} is healthy! Take care of it!`);
                game.start();
            });
            



