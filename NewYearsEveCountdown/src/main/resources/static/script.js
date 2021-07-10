const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const currentDate = new Date();
const year= currentDate.getFullYear()+1;
const newYearEve = "1 Jan "+year;

function countdown(){
    const currentDate= new Date();
    const newYear= new Date(newYearEve);
    const totalSeconds = (newYear - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = timeFormat(days);
    hoursEl.innerHTML = timeFormat(hours);
    minutesEl.innerHTML = timeFormat(minutes);
    secondsEl.innerHTML = timeFormat(seconds);
}

function timeFormat(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);