// console.log("Bienvenido al Sistema Interactivo de Mensajes!");
// let nameUser = prompt("cuales tu nombre?: ");
// let age = prompt("digite su edad: ");

function is_negative_number(age) {
  if (age < 0) {
    return true;
  } else {
    return false;
  }
}

function validateForm(form, event) {
  event.preventDefault();

  let nameUser = form.UserName.value;
  let age = +form.age.value;

  console.log(nameUser, age);

  const isNegative = is_negative_number(age); // Verifica si la edad es negativa

  if (isNegative || isNaN(age) || is_negative_number(age)) {
    // Verifica si la edad es negativa o no es un número
    console.error("Error: Por favor, ingresa una edad valida.");
  } else if (age < 18) {
    document.getElementById(
      "result"
    ).innerHTML = `Hola ${nameUser}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo`;

    document.getElementById(
      "result"
    ).innerHTML = `Hola ${nameUser}, eres mayor de edad. ¡preparate para grandes oportunidades en el mundo de la programacion!`;
  }
}
