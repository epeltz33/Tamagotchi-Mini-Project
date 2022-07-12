// create  a function that will display the name of the Tamagotchi'by creating a new div with the name of the Tamagotchi
const retrieveTamagotchi = () => {
  let tamagotchiName = document.getElementById("tamName").value;
  let h3 = document.createElement("h3");
  h3.innerText = tamagotchiName;
  h3.setAttribute("id", "tamagotchiName");
  document.body.appendChild(h3);
};
document.getElementById("submit").addEventListener("click", retrieveTamagotchi);

// create a class that will create the Tamagotchi with a constructor

class Tamagotchi {
  constructor() {
    this.name = 0;
    this.hunger = 0;
    this.sleep = 0;
    this.boredom = 0;
    this.age = 0;
    this.lightsOn = true;
    this.isAlive = true;
  }
  // making a function that will increase hunger by a set interval 2 seconds
  hungerIncrease() {
    this.hungerid = setInterval(() => {
      const hungerFactor = document.getElementById("hunger");
      hungerFactor.innerText = `Hunger: ${this.hunger}`;
      this.hunger++;

      if (this.hunger > 10) {
        this.hunger = 10;
        clearInterval(this.hungerid);
        this.killedTamagotchi();
      }
    }, 2000);
  }
  // making a function that will increase sleep by a set interval 1.5 seconds
  sleepIncrease() {
    this.sleepid = setInterval(() => {
      const sleepFactor = document.getElementById("tired");
      sleepFactor.innerText = `Sleep: ${this.sleep}`;
      this.sleep++;

      if (this.sleep > 10) {
        this.sleep = 10;
        clearInterval(this.sleepid);
        this.killedTamagotchi();
      }
    }, 1500);
  }

  ageIncrease() {
    this.ageid = setInterval(() => {
      const ageFactor = document.getElementById("age");

      ageFactor.innerText = `Age: ${this.age}`;

      this.age++;

      if (this.age === 1) {
        console.log("testing");
        this.ageUpOne();
      } else if (this.age === 2) {
        this.ageUpTwo();
        clearInterval(this.ageid);
      }
    }, 4500);
  }

  boredomIncrease() {
    this.boredid = setInterval(() => {
      const boredFactor = document.getElementById("bored");
      boredFactor.innerText = `Bored: ${this.boredom}`;
      this.bored++;

      if (this.bored > 10) {
        clearInterval(this.boredid);
        this.killedTamagotchi();
      }
    }, 1500);
  }
  ageUpOne() {
    document.getElementById("pug").setAttribute("src", "images/age1.jpeg");
  }
  ageUpTwo() {
    document.getElementById("pug").setAttribute("src", "images/age2.jpeg");
  }

  killedTamagotchi() {
    document.getElementById("pug").setAttribute("src", "images/rip.jpeg");
    clearInterval(this.ageid);
    clearInterval(this.sleepid);
    clearInterval(this.hungerid);
    clearInterval(this.boredid);
  }

  nightTime() {
    let night = document.createElement("img");
    night.setAttribute("src", "images/Moon.png");
    night.setAttribute("id", "moon");
    document.body.appendChild(night);
    this.lightsOn = false; //
  }
  dayTime() {
    this.lightsOn = true;
    document.getElementById("moon").remove(); // cant get this to work
  }
  changeLights() {
    this.sleep--;
    if (this.lightsOn === true) {
      this.nightTime();
    } else {
      this.dayTime();
    }
  }
  feed() {
    this.hunger--;
  }

  play() {
    this.boredid--;
  }
  beginGame() {
    this.hungerIncrease();
    this.ageIncrease();
    this.boredomIncrease();
    this.sleepIncrease();
  }
}

const firstTamagotchi = new Tamagotchi("");
console.log(firstTamagotchi);

const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", () => {
  firstTamagotchi.beginGame();
});

document.getElementById("feed").addEventListener("click", () => {
  firstTamagotchi.feed();
});
document.getElementById("lightsOff").addEventListener("click", () => {
  firstTamagotchi.changeLights();
});
document.getElementById("play").addEventListener("click", () => {
  firstTamagotchi.play();
});
