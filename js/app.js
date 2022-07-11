// Tamagotchi

// DOM elements
const background = document.getElementById("background");



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

       
}// function to update the stats of the pet
const updateHunger = () => {
    Pet.hunger.innerText = `Hunger: ${Pet.hunger}`;
    console.log("Pet.hunger has been updated");
}
const updateSleep = () => {
    Pet.sleep.innerText = `Sleep: ${Pet.sleep}`;
    console.log("Pet.sleep has been updated");
}
const updateBoredom = () => {
    Pet.boredom.innerText = `Boredom: ${Pet.boredom}`;
    console.log("Pet.boredom has been updated");
    }

const updateAge = () => {
    Pet.age.innerText = `Age: ${Pet.age}`;
    console.log("Pet.age has been updated");
}
const updateEverything = () => {  
    updateHunger();
    updateSleep();
    updateBoredom();
    updateAge();
}
// run all functions at set intervals
const runTimer = () => {
    let clock = setInterval(() => {
        updateAge();
        updateHunger();
        updateSleep();
        updateBoredom();
        if (Pet.hunger >= 10 || Pet.hunger <= 0 || Pet.sleep >= 10 || Pet.boredom >= 10) {
            clearInterval(clock)
            Pet.isAlive = false;
            alert("Your pet has died");
        }
        }, 15000);
    }
   // let game loop
   const game = () => {
    if (Pet.isAlive) {
        runTimer();
    }
}
