const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
const automatic = document.getElementById('automatic');
let colorIndex = 0; //global variable for change color of trafficlight
let intervalId = null; // used to get setinterval id, so I can stop the automatic function.

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
}

const changeColor = () => {
    const colors = ['red', 'green', 'yellow'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red':          () => img.src = './img/vermelho.png',
    'green':        () => img.src = './img/verde.png',
    'yellow':       () => img.src = './img/amarelo.png',
    'automatic':    () => intervalId = setInterval(changeColor, 1000) // change color every 1000 milliseconds
}

buttons.addEventListener('click', trafficLight)
