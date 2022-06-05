var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var meses2 = Array.from(meses);

console.log(meses[5]);
console.log(meses[11]);

console.log(meses.sort());

meses.unshift("Primero");
meses.push("Ultimo");
console.log(meses);

meses.shift();
meses.pop();
console.log(meses);

meses.reverse();
console.log(meses);

console.log(meses.join("-"));

console.log(meses2.slice(4,11));