let signIn = document.querySelector(".signIn");
let signUp = document.querySelector(".signUp");
let slide = document.querySelector(".slide");
let loginForm = document.querySelector(".loginForm");
let signupForm = document.querySelector(".signupForm");

signUp.addEventListener("click", () => {
  slide.style.left = "0";
  slide.style.background =
    "linear-gradient(200deg, rgba(0, 140, 49, 1), rgba(2, 51, 19, 1))";
  signUp.style.display = "none";
  signIn.style.display = "block";
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

signIn.addEventListener("click", () => {
  slide.style.left = "50%";
  slide.style.background =
    "linear-gradient(60deg,rgba(0, 140, 49, 1) 0%,rgba(2, 51, 19, 1) 100%)";
  signUp.style.display = "block";
  signIn.style.display = "none";
  loginForm.style.display = "block";
  signupForm.style.display = "none";
});
