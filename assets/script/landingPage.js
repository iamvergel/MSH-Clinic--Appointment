let sideNav = document.getElementById("mySidenav");
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let toggleBtn = document.getElementById("toggleBtn");
let navBtn = document.querySelector(".navButton");
let speech = document.querySelector(".speech-bubble p");
let header = document.querySelector(".header");

let windowWidth = window.innerWidth;

function openNav() {
  if (sideNav.style.width === "250px") {
    sideNav.style.width = "0";
    container.style.left = "0";
    container.style.width = "100%";
    header.style.left = "0";
    header.style.width = "100%";
    navBtn.style.opacity = "0";
    toggleBtn.textContent = "☰";
    speech.innerHTML =
      "Needing Medical advise? <br /> <br /> Book appointment here.";
  } else {
    sideNav.style.width = "250px";
    container.style.left = "250px";
    container.style.width = "calc(100% - 250px)";
    header.style.left = "250px";
    header.style.width = "calc(100% - 250px)";
    navBtn.style.opacity = "1";
    toggleBtn.textContent = "✖";

    speech.innerHTML = "Wow, Do you want to see your personal Information.";
  }
}

let profile = document.querySelector(".profile");
let dashboard = document.querySelector(".dashboard");

profile.addEventListener("click", () => {
  profile.style.backgroundColor = "#008c31";
  dashboard.style.backgroundColor = "#013312";
  container.style.display = "none";
  container2.style.display = "block";
  sideNav.style.width = "0";
  container.style.left = "0";
  container.style.width = "100%";
  header.style.left = "0";
  header.style.width = "100%";
  navBtn.style.opacity = "0";
  toggleBtn.textContent = "☰";
});

dashboard.addEventListener("click", () => {
  profile.style.backgroundColor = "#013312";
  dashboard.style.backgroundColor = "#008c31";
  container.style.display = "block";
  container2.style.display = "none";
  sideNav.style.width = "0";
  container.style.left = "0";
  container.style.width = "100%";
  header.style.left = "0";
  header.style.width = "100%";
  navBtn.style.opacity = "0";
  toggleBtn.textContent = "☰";
});

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

let AppointmentBtn = document.querySelector(".AppointmentBtn");
let apointmentBg = document.querySelector(".apointmentBg");
let apointment = document.querySelector(".apointment");

AppointmentBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  apointmentBg.style.display = "block";
});

document.body.addEventListener("click", (event) => {
  if (!event.target.closest(".apointment") && event.target !== AppointmentBtn) {
    apointmentBg.style.display = "none";
  }
});

let submit = document.querySelector(".submit");
let name1 = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let date = document.querySelector("#date");
let time = document.querySelector("#time");
let telnum = document.querySelector("#telnum");
let reason = document.querySelector("#reason");
let modal = document.querySelector(".modal");
let okay = document.querySelector(".okay");

submit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  if (
    name1.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    date.value === "" ||
    telnum.value === "" ||
    time.value === "" ||
    reason.value === ""
  ) {
    alert("Please fill all form!");
  } else {
    apointmentBg.style.display = "none";

    setTimeout(() => {
      modal.style.display = "block";

      name1.value = "";
      email.value = "";
      phone.value = "";
      date.value = "";
      telnum.value = "";
      time.value = "";
      reason.value = "";

      setTimeout(() => {
        modal.style.display = "none";
      }, 4000);
    }, 1500);
  }
});

okay.addEventListener("click", () => {
  modal.style.display = "none";
});

let editProfile = document.querySelector(".editProfile");
let editForm = document.querySelector(".editForm");
let save = document.querySelector(".save");
let edit = document.querySelector(".edit");

edit.addEventListener("click", () => {
  editProfile.style.display = "block";
});

let firstname1 = document.querySelector(".firstname1");
let middlename1 = document.querySelector(".middlename1");
let lastname1 = document.querySelector(".lastname1");
let age1 = document.querySelector(".age1");
let birthday1 = document.querySelector(".birthday1");
let sex1 = document.querySelector(".sex1");
let blood1 = document.querySelector(".blood1");
let maritalstatus1 = document.querySelector(".maritalstatus1");
let phone1 = document.querySelector(".phone1");
let address1 = document.querySelector(".address1");
let email1 = document.querySelector(".email1");
let allergies1 = document.querySelector(".allergies1");

let firstname3 = document.querySelector(".firstname3");
let middlename3 = document.querySelector(".middlename3");
let lastname3 = document.querySelector(".lastname3");
let age3 = document.querySelector(".age3");
let birthday3 = document.querySelector(".birthday3");
let sex3 = document.querySelector(".sex3");
let blood3 = document.querySelector(".blood3");
let maritalstatus3 = document.querySelector(".maritalstatus3");
let phone3 = document.querySelector(".phone3");
let address3 = document.querySelector(".address3");
let email3 = document.querySelector(".email3");
let allergies3 = document.querySelector(".allergies3");

save.addEventListener("click", () => {
  editProfile.style.display = "none";
  firstname3.value = firstname3.value;
  middlename3.value = middlename3.value;
  lastname3.value = lastname3.value;
  age3.value = age3.value;
  birthday3.value = birthday3.value;
  sex3.value = sex3.value;
  blood3.value = blood3.value;
  maritalstatus3.value = maritalstatus3.value;
  phone3.value = phone3.value;
  address3.value = address3.value;
  email3.value = email3.value;
  allergies3.value = allergies3.value;
});
