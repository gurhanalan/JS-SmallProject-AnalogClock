const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");
const clock = document.querySelector(".clock");

function displayTime() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    secEl.style.setProperty("--rotation", `${secondsRatio * 360}`);
    minEl.style.setProperty("--rotation", `${minutesRatio * 360}`);
    hourEl.style.setProperty("--rotation", `${hoursRatio * 360}`);
}

function createTicks() {
    for (let i = 0; i < 360; i += 6) {
        clock.insertAdjacentHTML(
            "beforeend",
            `<div style="--rotation:${i}deg"class="tick">|</div>`
        );
    }
    for (let i = 0; i < 360; i += 30) {
        clock.insertAdjacentHTML(
            "beforeend",
            `<div style="--rotation:${i}deg"class="tick--long">|</div>`
        );
    }
}
createTicks();
displayTime();
setInterval(displayTime, 1000);
