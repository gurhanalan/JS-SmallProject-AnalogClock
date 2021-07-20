const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");

function displayTime() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    secEl.style.setProperty("--rotation", `${secondsRatio * 360}`);
    minEl.style.setProperty("--rotation", `${minutesRatio * 360}`);
    hourEl.style.setProperty("--rotation", `${hoursRatio * 360}`);
}

displayTime();
setInterval(displayTime, 1000);
