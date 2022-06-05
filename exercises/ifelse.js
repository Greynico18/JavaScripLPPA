var unValorAlAzar = Math.random();
if (unValorAlAzar >= 0.5) {
    alert("Greater than 0.5");
} else {
    alert("Lower than 0.5");
}

var age = Math.floor(unValorAlAzar*100);
if (age < 2) {
    alert("Bebe");
} else if (age <= 12) {
    alert("Niño");
} else if (age <= 19) {
    alert("Adolescente");
} else if (age <= 30) {
    alert("Joven");
} else if (age <= 60) {
    alert("Adulto");
} else if (age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}