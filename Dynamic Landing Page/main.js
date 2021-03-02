const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

const shwoAmPm = true;

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${shwoAmPm ? amPm : ""}`;
  setTimeout(showTime, 1000);
}
// add zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
//set background and greeting
function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    document.body.style.backgroundImage = "url('./images/morning.jpeg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./images/day.jpeg')";
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = "url('./images/night.jpeg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
function setName(e) {
  if (e.type === "keypress") {
    if (e.wich == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    } else {
      localStorage.setItem("name", e.target.innerHTML);
    }
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
function setFocus(e) {
  if (e.type === "keypress") {
    if (e.wich == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    } else {
      localStorage.setItem("focus", e.target.innerHTML);
    }
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
//run
showTime();
setBgGreet();
getName();
getFocus();

