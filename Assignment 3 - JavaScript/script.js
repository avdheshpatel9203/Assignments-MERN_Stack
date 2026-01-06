// Function to change the background color of the boxes

const boxRed = document.getElementById("box-red");
const boxBlue = document.getElementById("box-blue");
const boxGreen = document.getElementById("box-green");
const boxYellow = document.getElementById("box-yellow");

boxRed.addEventListener("click", function () {
  boxRed.style.backgroundColor = "red";
  boxRed.style.color = "white";
});

boxBlue.addEventListener("click", function () {
  boxBlue.style.backgroundColor = "blue";
  boxBlue.style.color = "white";
});

boxGreen.addEventListener("click", function () {
  boxGreen.style.backgroundColor = "green";
  boxGreen.style.color = "white";
});

boxYellow.addEventListener("click", function () {
  boxYellow.style.backgroundColor = "yellow";
});

const greetingButton = document.getElementById("greeting-button");
greetingButton.addEventListener("click", function () {
  const nameInput = document.getElementById("name-input").value;
  const greetingName = document.getElementById("greeting-name");
  greetingName.textContent = ", " + nameInput + "!";
});
