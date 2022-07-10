// Tamagotchi

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

// Create a constructor function for your Tamagotchi

// pet class
const Pet = {
    name: '',
    age: 0,
    hunger: 0,
    sleep: 0,
    boredom: 0,
    lightsOn: true,
    isAlive: true,


}
// functions to  increase the stats of the pet
const increaseHunger = () => {
    Pet.hunger++;
    updateHunger(); // update the hunger stat
    console.log`${Pet.name} is hungry`;
}
const increaseSleep = () => {
    Pet.sleep++;
    updateSleep(); // update the sleep stat
    console.log`${Pet.name} is sleepy`;
}
const increaseBoredom = () => {
    Pet.boredom++;
    updateBoredom(); // update the boredom stat
    console.log`${Pet.name} is bored`;
}
const increaseAge = () => {
    Pet.age++;
    updateAge(); // update the age stat
    console.log`${Pet.name} is old`;
}
// functions to  decrease the stats of the pet
const decreaseHunger = () => {
    Pet.hunger--;
    updateHunger(); // update the hunger stat
    console.log("That tasted good");
}
toggleLights = () => {
    if (Pet.lightsOn) {
        Pet.lightsOn = false;
        background.style.backgroundColor = "rgba(255,255,255,0.5)"; // background color is turns on 
        console.log("The lights on");
    } else {
        Pet.lightsOn = true;
        background.style.backgroundColor = "rgba(0,0,0,0.5)"; 
        Pet.sleep = 2;
        updateSleep();
        console.log("The lights off");
        }
        
       
}
 

