let logIn = document.querySelector(".login");

let userAccount = [
  { user: "Angelo", pass: "Ordonio" },
  { user: "Joemel", pass: "Pinones" },
  { user: "Ryan", pass: "Rodriguez" },
  { user: "Mark", pass: "Panis" },
  { user: "Edward", pass: "Turalba" },
  { user: "Sample", pass: "Sample" },
];
let userName = document.querySelector("#username");
let passWord = document.querySelector("#password");

let loader = document.querySelector(".loader");

logIn.addEventListener("click", () => {
  for (let i = 0; i < userAccount.length; i++) {
    if (
      userName.value === userAccount[i].user &&
      passWord.value === userAccount[i].pass
    ) {
      if (userName.value === "Angelo") {
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "/assets/src/Angelo.html";
        }, 2000);
      } else {
        alert("Username or Password is not Correct!");
      }
    }
  }
});
