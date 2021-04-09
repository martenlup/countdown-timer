const atzenTag = "25 Sep 2021";

function countdown(){
    const atzenTagDate = new Date(atzenTag);
    const currentDate = new Date();

    const totalSeconds = (atzenTagDate- currentDate) / 1000;

    const day = Math.floor(totalSeconds / 60 / 60 / 24);
    const hour = Math.floor(totalSeconds / 60 / 60) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

}
countdown();
setInterval(countdown, 1000);