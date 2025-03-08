function digitalClock(){
    const timeElement = document.querySelector("#time");
const dateElement = document.querySelector("#date");
const now = new Date();
const hours =  (now.getHours()%12) || 12;
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2,"0");
const AMorPM = now.getHours() >=12 ? "PM" : "AM";

timeElement.textContent = `${hours}:${minutes}:${seconds} ${AMorPM}`;
}


setInterval(digitalClock, 1*1000);
digitalClock();