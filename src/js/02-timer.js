import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const getDate = document.getElementById('datetime-picker');
const start = document.querySelector('button[data-start]');
const daysC = document.querySelector('[data-days]');
const hoursC = document.querySelector('[data-hours]');
const minutesC = document.querySelector('[data-minutes]');
const secondsC = document.querySelector('[data-seconds]');

let setNewDate = new Date();
start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    
    let chosenDate = new Date(selectedDates[0]);
    let now = new Date();
    
    if (chosenDate < now) {
      Notiflix.Notify.failure('Please choose a date in the future');
     start.setAttribute('disabled', 'disabled');
    } else {
      setNewDate = chosenDate;
      start.removeAttribute('disabled');
    }
  },
};

flatpickr(getDate, options);

function convertMs(ms) {
// Number of milliseconds per unit of time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Remaining days
const days = Math.floor(ms / day);
// Remaining hours
const hours = Math.floor((ms % day) / hour);
// Remaining minutes
const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
const seconds = Math.floor((((ms % day) % hour) % minute) / second);

return { days, hours, minutes, seconds };
}

let addLeadingZero = value => value.toString().padStart(2, '0');

function updateValues(distance) {
  const { days, hours, minutes, seconds } = convertMs(distance);
  daysC.textContent = addLeadingZero(days);
  hoursC.textContent = addLeadingZero(hours);
  minutesC.textContent = addLeadingZero(minutes);
  secondsC.textContent = addLeadingZero(seconds);
}

function checkTimerInput() {
  return (
    daysC.textContent === '00' &&
    hoursC.textContent === '00' &&
    minutesC.textContent === '00' &&
    secondsC.textContent === '00'
  );
}

start.addEventListener('click', () => {
  function timer() {
    let now = new Date();
    let distance = setNewDate - now;

    updateValues(distance);
    
    const isTimerFinished = checkTimerInput();
    if (isTimerFinished) {
      clearInterval(setCountdown);
    }
  }

  const setCountdown = setInterval(timer, 1000);
});