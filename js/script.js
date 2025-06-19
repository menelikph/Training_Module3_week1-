// Function to check if the provided age is a negative number
function is_negative_number(age) {
  if (age < 0) {
    return true;
  } else {
    return false;
  }
}

// Function that validates the form input when the user submits the form
function validateForm(form, event) {
  event.preventDefault(); // Prevents the form from submitting and reloading the page

  let nameUser = form.UserName.value; // Gets the value of the name input
  let age = +form.age.value; // Gets the value of the age input and converts it to a number

  const isNegative = is_negative_number(age); // Checks if the age is a negative number

  // Validates if the age is negative or not a number
  if (isNegative || isNaN(age) || is_negative_number(age)) {
    document.getElementById("result").innerHTML = "Error: Por favor, ingresa una edad valida."; // Clears the result if the input is invalid
  } else if (age < 18) {
    // If the user is under 18, display a message for minors
    document.getElementById(
      "result"
    ).innerHTML = `Hola ${nameUser}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo`;
  } else {
    // If the user is 18 or older, display a message for adults
    document.getElementById(
      "result"
    ).innerHTML = `Hola ${nameUser}, eres mayor de edad. ¡preparate para grandes oportunidades en el mundo de la programacion!`;
  }
}
