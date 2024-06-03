let logIn = document.querySelector(".login");

logIn.addEventListener("click", () => {
  let user = document.querySelector("#username");
  let pass = document.querySelector("#password");
  let loader = document.querySelector(".loader");

  if (user.value === "admin" && pass.value === "123") {
    loader.style.display = "block";
    setTimeout(() => {
      window.location.href =
        "http://127.0.0.1:5500/assets/src/landingpage1.html";
    }, 1000);
  } else {
    alert("Wrong username or password");
  }
});
