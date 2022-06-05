function suma(num1, num2) {
    return num1 + num2;
}
var resultado = suma(4, 2);
console.log(resultado);


function suma2(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "NaN";
    } else {
        return num1+num2;
    }    
}
console.log(suma2("hola", 3));
console.log(suma2(5, "chau"));
console.log(suma2(2,6));


function validarEntero(num1) {
    return !isNaN(num1) && num1 == Math.floor(num1);
}
console.log(validarEntero("Kapoor"));
console.log(validarEntero(3.7));
console.log(validarEntero(8));


function suma3(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "NaN";
    } else if (validarEntero(num1) && validarEntero(num2)) {
        return num1+num2;
    } else {
        alert("Error numeros decimales");
    }    
}
console.log(suma3("hola", 3));
console.log(suma3(5, 3.9));
console.log(suma3(2,6));