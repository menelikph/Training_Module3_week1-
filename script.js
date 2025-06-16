console.log("Bienvenido al Sistema Interactivo de Mensajes!");

let nameUser = prompt("cuales tu nombre?: ");
let age = prompt("digite su edad: ");

age = parseInt(age);

function is_negative_number(age){
  if(age < 0){
    return true
  }else{
    return false
  }
}

if ((isNaN(age) || is_negative_number(age)) ) {
  console.error("Error: Por favor, ingresa una edad valida.");
} else if (age < 18) {
  alert(
    `Hola ${nameUser}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo`
  );
} else {
  alert(
    `Hola ${nameUser}, eres mayor de edad. ¡preparate para grandes oportunidades en el mundo de la prograacion!`
  );
}
