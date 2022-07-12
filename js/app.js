
// create  a function that will display the name of the Tamagotchi'by creating a new div with the name of the Tamagotchi
const retrieveTamagotchi = () => {
  let tamagotchiName = document.getElementById('tamName').value;
  let h3 = document.createElement('h3');
  h3.innerText = tamagotchiName;
  h3.setAttribute('id', 'tamagotchiName');
  document.body.appendChild(h3); 
  
};
  document.getElementById('submit').addEventListener('click', retrieveTamagotchi);
  
// create a class that will create the Tamagotchi with a constructor

class Tamagotchi {
  constructor() {
    this.name = 0;
    this.hunger = 0;
    this.sleep = 0;
    this.boredom =0;
    this.age = 0;
    this.lightsOff = true;
    this.isAlive = true;
  }
  // making a function that will increase hunger by a set interval 2 seconds
  hungerIncrease() {
  this.hungerid = setInterval(() => {
    const hungerFactor = document.getElementById('hunger');
    hungerFactor.innerText = `Hunger: ${this.hunger}`;
    this.hunger++;
    
    if (this.hunger > 10) {
      this.hunger = 10;
      clearInterval(this.hungerid);
      this.isAlive = false;
    }
    }, 2000);
  }
  // making a function that will increase sleep by a set interval 1.5 seconds
  sleepIncrease() {
  this.sleepid = setInterval(() => {
  const sleepFactor = document.getElementById('tired');
  sleepFactor.innerText = `Sleep: ${this.sleep}`;
  this.sleep++;
  
  if (this.sleep > 10) {
    this.sleep = 10;
    clearInterval(this.sleepid);
    this.isAlive = false;
  }
}, 1500);
  }
  
  ageIncrease() {
  this.























}