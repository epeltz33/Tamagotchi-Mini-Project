// Tamagotchi Mini-Project

// Create a class for the Tamagotchi
class Tamagotchi {
  // Display the following properties on the Tamagotchi class:
   constructor(name, age, hunger, sleepiness, boredom, image) {
     this.name = name;
     this.age = age;
     this.hunger = hunger;
     this.sleepiness = sleepiness;
     this.boredom = boredom;
      this.image = image;
   }
 }
 // Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
 Tamagotchi.prototype.addPetButton = function() { 
  const btn = document.getElementById('pet');
    btn.addEventListener('click', function() {
      this.hunger -= 10;
      this.sleepiness -= 10;
      this.boredom -= 10;
      this.age += 1;
      this.displayPet();
    }
    );
  }
 



