let sideNav = document.getElementById("mySidenav");
let container = document.querySelector(".container");
let toggleBtn = document.getElementById("toggleBtn");
let navBtn = document.querySelector(".navButton");
let speech = document.querySelector(".speech-bubble p");

let windowWidth = window.innerWidth;

function openNav() {
  if (sideNav.style.width === "250px") {
    sideNav.style.width = "0";
    container.style.left = "0";
    container.style.width = "100%";
    navBtn.style.opacity = "0";
    toggleBtn.textContent = "☰";
    speech.innerHTML =
      "Needing Medical advise? <br /> <br /> Book appointment here.";
  } else {
    sideNav.style.width = "250px";
    container.style.left = "250px";
    container.style.width = "calc(100% - 250px)";
    navBtn.style.opacity = "1";
    toggleBtn.textContent = "✖";

    speech.innerHTML = "Wow, Do you want to see your personal Information.";
  }
}

let socMed = document.querySelector(".socialMedia");

socMed.addEventListener("mouseover", () => {
  speech.innerHTML =
    "If you have any qoestion <br /> <br /> Please Message us.";
});

socMed.addEventListener("mouseout", () => {
  speech.innerHTML =
    "Needing Medical advise? <br /> <br /> Book appointment here.";
});

let appointment = document.querySelector(".AppointmentBtn");

appointment.addEventListener("mouseover", () => {
  speech.innerHTML = "You want to set appointment?";
});

appointment.addEventListener("mouseout", () => {
  speech.innerHTML =
    "Needing Medical advise? <br /> <br /> Book appointment here.";
});

let statusBtn = document.querySelector(".statusBtn");

statusBtn.addEventListener("mouseover", () => {
  speech.innerHTML = "You want to see your?";
});

statusBtn.addEventListener("mouseout", () => {
  speech.innerHTML =
    "Needing Medical advise? <br /> <br /> Book appointment here.";
});

let logout = document.querySelector(".logOut");
let loader = document.querySelector(".loader");

logout.addEventListener("click", () => {
  let con = confirm("Are you sure you want to log out?");

  if (con) {
    loader.style.display = "block";
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 1000);
  } else {
    return;
  }
});
/*function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Get today's date
  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // Calculate two weeks from today
  let twoWeeksFromToday = new Date();
  twoWeeksFromToday.setDate(today.getDate() + 14);

  // Format dates to YYYY-MM-DD
  let tomorrowStr = tomorrow.toISOString().split("T")[0];
  let twoWeeksFromTodayStr = twoWeeksFromToday.toISOString().split("T")[0];

  // Set the min and max attributes of the input field
  let dateInput = document.getElementById("appointment_date");
  dateInput.setAttribute("min", tomorrowStr);
  dateInput.setAttribute("max", twoWeeksFromTodayStr);
});

function validateInput() {
  const input = document.getElementById("phone");
  const fixedValue = "+63 ";
  if (!input.value.startsWith(fixedValue)) {
    input.value = fixedValue;
  }
  if (input.value.length > 14) {
    input.value = input.value.slice(0, 14);
  }
}

window.onload = () => {
  document.getElementById("phone").value = "+63 ";
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function closeModal() {
  modal.style.display = "none";
}*/
