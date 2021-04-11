const daysEl = document.getElementById('daysEl');
const hoursEl = document.getElementById("hoursEl");
const minutesEL = document.getElementById("minutesEl");
const secondsEl = document.getElementById("secondsEl");

const inputDate = "15 Apr 2021";

function counter() {
    const currentDate = new Date();
    const futureDate = new Date(inputDate);

    const totalSeconds = (futureDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 60 / 60 / 24);
    const hours = Math.floor(totalSeconds / 60 / 60) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEL.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(counter, 1000)