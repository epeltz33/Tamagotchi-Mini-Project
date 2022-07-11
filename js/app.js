

// DOM elements to update the stats
const background = document.getElementById("background");
const petInput = document.getElementById("pet-name");
const petName = document.getElementById("name");
const petAge = document.getElementById("age");
const petHunger = document.getElementById("hunger");
const petSleep = document.getElementById("sleep");
const play = document.getElementById("play");
const start = document.getElementById("start");
const lights = document.getElementById("light");
const feed = document.getElementById("feed");
// placeholder for the name of the pet
let inputName = "";

// Create a constructor function for your Tamagotchi

// pet class
const Pet = {
    name: "",
    age: 1,
    hunger: 6,
    sleep: 1,
    boredom: 1,
    lightsOn: true,
   
}
// functions to  increase the stats of the pet
const increaseHunger = () => {
    Pet.hunger++;
    updateHunger(); // update the hunger stat
    console.log`${Pet.name} is getting very hungry`;
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
        play: () => {
            if (Pet.boredom > 0) {
                Pet.boredom--;
                updateBoredom();
                console.log("This is fun!");
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
    updateAge();
    updateHunger();
    updateSleep();
    updateBoredom();
   
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
   // start the game when the start button is clicked
   const gameOpen= () => {
    start.addEventListener("click", () => {
        inputName = petInput.value;
        Pet.name = inputName;
        petName.innerText = `Name: ${Pet.name}`;
        petAge.innerText = `Age: ${Pet.age}`;
        petHunger.innerText = `Hunger: ${Pet.hunger}`;
        petSleep.innerText = `Sleep: ${Pet.sleep}`;
        play.innerText = `Play: ${Pet.boredom}`;
        start.style.display = "none";
        petInput.style.display = "none";
        runTimer();
        console.log("Game has started");
    }
    )
    // name the pet and start the game with the name
    const nameIt = () => {
        inputName = petInput.value;
        updateAll();
        play.addEventListener("click", () => {
    
}