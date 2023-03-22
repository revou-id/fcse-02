// Javascript Variable

var x = 5;
let y = 6;
const z = x + y;
document.getElementById("demo").innerHTML = "The value of z is: " + z;

// Javascript Conditional
const time = new Date().getHours();
// z = 100;
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("conditional").innerHTML = greeting;

// Looping
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("looping").innerHTML = text;
// console.log("text", text);
//javascript function
myFunction();

function myFunction() {
  let carName = "Volvo";
  document.getElementById("function-one").innerHTML =
    typeof carName + " " + carName;
}

document.getElementById("function-two").innerHTML = typeof carName;
document.getElementsByClassName;
