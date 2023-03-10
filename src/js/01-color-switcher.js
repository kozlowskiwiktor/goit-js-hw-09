
const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')

// const button = document.querySelector('button');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
start.addEventListener('click', () => {
    timerID = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
    start.disabled = true;
});

stop.addEventListener('click', () => {
    clearInterval(timerID);
    console.log(`Lucky You! Your color number is ${getRandomHexColor()}`);
    start.disabled = false;
});