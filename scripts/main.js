let myImage = document.querySelector("img");


myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "Logo.png") {
    myImage.setAttribute("src", "Logo2.png");
  } else {
    myImage.setAttribute("src", "Logo.png");
  }
});

function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Salut " + myName + " !";
  if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Salut " + storedName + " !";
}}

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

myButton.addEventListener("click", function () {
  setUserName();
});