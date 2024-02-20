'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector("input#datetime-picker");
const startButton = document.querySelector("button");
const daysDisplayed = document.querySelector("span[data-days]");
const hoursDisplayed = document.querySelector("span[data-hours]");
const minutesDisplayed = document.querySelector("span[data-minutes]");
const secondsDisplayed = document.querySelector("span[data-seconds]");

let userSelectedDate;
let intervalId = null;

startButton.disabled = true; 

function initializeFlatpickr() {
  flatpickr(input, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    clickOpens: true,
    onClose: handleDateSelection,
  });
}

function handleDateSelection(selectedDates) {
    if (selectedDates[0] < new Date()) {
        startButton.disabled = true;
        iziToast.show({
        iconUrl: '../img/icon.svg',
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        color: '#ef4040',
        close: false,
        position: 'topRight',
      });
    } else {
        userSelectedDate = selectedDates[0];
        startButton.disabled = false;
        clearInterval(intervalId);
    }
};  

function startCountdown() {
  clearInterval(intervalId);
  startButton.disabled = true;
  input.disabled = true;
    
  intervalId = setInterval(() => {
   const currentTime = Date.now();
   const deltaTime = userSelectedDate - currentTime;
    if (deltaTime <= 0) {
      clearInterval(intervalId);
      startButton.disabled = true;
      input.disabled = false;
      return;
    }
    const time = convertMs(deltaTime);
      updateTimer(time);
      
    //  console.log(time);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysDisplayed.textContent = String(days).padStart(2, '0');
  hoursDisplayed.textContent = String(hours).padStart(2, '0');
  minutesDisplayed.textContent = String(minutes).padStart(2, '0');
  secondsDisplayed.textContent = String(seconds).padStart(2, '0');
};

initializeFlatpickr();
startButton.addEventListener("click", startCountdown);