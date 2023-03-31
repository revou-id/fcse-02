function calculate() {
  // Get the value of the input fields
  const num1 = parseFloat(document.getElementById("number-one").value);
  const num2 = parseFloat(document.tElementById("number-two").value);

  // Perform calculation
  const result = num1 + num2;

  // Display result in HTML element
  document.getElementById("show-result").textContent = result;
}
