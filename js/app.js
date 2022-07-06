// Tamagotchi

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

class Tamagotchi {
 constructor( name, age, hunger, sleepiness, boredom ) {
   this.name = "";
   this.hunger = 0;
   this.sleep = 0;
   this.boredom = 0;
   this.age = 0;
   this.alive = true;
 }
 // Increase your pet's age every x minutes
  increaseAge() {
      this.age++;

      this.age > 10 ? this.alive = false : this.age < 1 ? this.alive = false : this.alive = true; // if age is greater than 10, pet is dead and if age is less than 1, pet is dead
  }
  // Increase your pet's hunger every x minutes
  increaseHunger() {
      this.hunger++;

      this.hunger > 10 ? this.alive = false : this.hunger < 1 ? this.alive = false : this.alive = true; // if hunger is greater than 10, pet is dead and if hunger is less than 1, pet is dead
  }
  // Increase your pet's sleepiness every x minutes
  increaseSleep() {
      this.sleep++;

      this.sleep > 10 ? this.alive = false : this.sleep < 1 ? this.alive = false : this.alive = true; // if sleep is greater than 10, pet is dead and if sleep is less than 1, pet is dead
  }
  // Increase your pet's boredom every x minutes
  increaseBoredom() {
      this.boredom++;

      this.boredom > 10 ? this.alive = false : this.boredom < 1 ? this.alive = false : this.alive = true; // if boredom is greater than 10, pet is dead and if boredom is less than 1, pet is dead
  }
  // Feed your pet
  feed() {
      this.hunger = 0;
       
  }



 
   
  
}

