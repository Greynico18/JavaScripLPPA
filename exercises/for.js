var palabras = ["mariposa","samurai","campera","medicamento","higado"];
palabras.forEach(element => {
    alert(element);
});

palabras.forEach(element => {
    alert(element.substring(0, 1).toUpperCase() + element.substring(1, element.length).toLowerCase());
});

var sentence = "";
palabras.forEach(element => {
    sentence = sentence + element + " ";
});
alert(sentence);

var numeros = [];
for (let index = 0; index < 10; index++) {
    numeros.push(index)    
}
console.log(numeros);
