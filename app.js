const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const zehntelEl = document.getElementById("zehntel");

const atzenTag = "25 Sep 2021";

function countdown() {
    const atzenTagDate = new Date(atzenTag);
    const currentDate = new Date();

    const totalSeconds = (atzenTagDate - currentDate) / 1000;
    const zehntelSeconds = (atzenTagDate - currentDate) / 100;

    const days = Math.floor(totalSeconds / 60 / 60 / 24);
    const hours = Math.floor(totalSeconds / 60 / 60) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    const zehntel = Math.floor(zehntelSeconds) % 10;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    zehntelEl.innerHTML = formatTime(zehntel);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`
    }
    else {
        return time;
    }
}

countdown();
setInterval(countdown, 100);