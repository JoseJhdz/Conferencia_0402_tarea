let mes = parseInt(prompt("Ingresa el mes de nacimiento (en nÃºmeros):"));
let dia = parseInt(prompt("Ingresa el dÃ­a de nacimiento (en nÃºmeros):"));
let signo;

if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
  alert("Datos invÃ¡lidos");
} else {
  switch (mes) {
    case 1:
      signo = (dia < 20) ? "Capricornio" : "Acuario";
      break;
    case 2:
      signo = (dia < 19) ? "Acuario" : "Piscis";
      break;
    case 3:
      signo = (dia < 21) ? "Piscis" : "Aries";
      break;
    case 4:
      signo = (dia < 20) ? "Aries" : "Tauro";
      break;
    case 5:
      signo = (dia < 21) ? "Tauro" : "GÃ©minis";
      break;
    case 6:
      signo = (dia < 21) ? "GÃ©minis" : "CÃ¡ncer";
      break;
    case 7:
      signo = (dia < 23) ? "CÃ¡ncer" : "Leo";
      break;
    case 8:
      signo = (dia < 23) ? "Leo" : "Virgo";
      break;
    case 9:
      signo = (dia < 23) ? "Virgo" : "Libra";
      break;
    case 10:
      signo = (dia < 23) ? "Libra" : "Escorpio";
      break;
    case 11:
      signo = (dia < 22) ? "Escorpio" : "Sagitario";
      break;
    case 12:
      signo = (dia < 22) ? "Sagitario" : "Capricornio";
      break;
  }
  alert("Tu signo zodiacal es: " + signo);
}