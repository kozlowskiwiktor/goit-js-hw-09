
const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')
let timerID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener('click', () => {
    timerID = setInterval(() => {
        let color = getRandomHexColor();
        document.body.style.background = color;
    }, 1000);
    start.disabled = true;
});

stop.addEventListener('click', () => {
    clearInterval(timerID);
    start.disabled = false;
});
