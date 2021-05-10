// var d = new Date();
// d.toLocaleTimeString();
// console.log(d);
// t = d.toLocaleString('en-US', {timeZone: 'America/New_York'});
// console.log(t);

const hourHand = document.getElementById("h");
const minuteHand = document.getElementById("m");
const secondHand = document.getElementById("s");

class Clock{
    constructor(country){
        this.country = country;
    }

    setClock() {
        const currentDate = this.country;
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hoursRatio = currentDate.getHours() / 12;
        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);
    }
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

let seoul = new Date(1489199400000);
let ny = new Date(1489199400000 - (840 * 60 * 1000));

console.log(seoul.getHours());
let clock = new Clock(seoul);


setInterval(clock.setClock, 1000);