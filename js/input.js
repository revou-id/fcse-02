function calculate() {
  // Get the value of the input fields
  const num1 = parseFloat(document.getElementById("number-one").value);
  const num2 = parseFloat(document.getElementById("number-two").value);

  // Perform calculation
  const result = num1 + num2;

  // Display result in HTML element
  document.getElementById("show-results").textContent = result;
}

function handleSubmit(event) {
  event.preventDefault(); // prevent the form from submitting

  try {
    const nameInput = document.getElementById("input-one");
    const numInput1 = document.getElementById("input-two");
    const numInput2 = document.getElementById("input-three");
    const themeInput = document.querySelector(
      'input[name="input-four"]:checked'
    );

    const name = nameInput.value.trim();
    const num1 = parseFloat(numInput1.value.trim(), 10);
    const num2 = parseFloat(numInput2.value.trim(), 10);
    const theme = themeInput.value;
    let number = num1 + num2;
    // check value
    if (!name || isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid input");
    }
    console.log("number", number);
    document.getElementById("show-name").textContent = name;
    document.getElementById(
      "show-result"
    ).textContent = `Hasil Result ${number}`;
    document.getElementById("show-theme").textContent = theme;
  } catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
}
