var text1 = "Hola, buenos días";
var text1Mayuscula = text1.toUpperCase();

var text2 = "Hola, buenas tardes";
var text2Cortado = text2.substring(0, 5);

var text3 = "Hola, buenas noches";
var text3Cortado = text3.substring(text3.length-3, text3.length);

var text4 = "lorem ipsum dolor sit amet consectetur adipisicing elit.";
var text4Modificado = text4.substring(0, 1).toUpperCase() + text4.substring(1, text4.length).toLowerCase();

var text5 = "Numquam ipsa corrupti modi magnam et ut quod nostrum";
var text5PrimerEspacio = text5.indexOf(" ");

var text6 = "amsterdam ventrilocuo";
var text6Espacio = text6.indexOf(" ");
var text6Modificado = text6.substring(0, 1).toUpperCase() + text6.substring(1, text6Espacio).toLowerCase() + " " +
    text6.substring(text6Espacio+1, text6Espacio+2).toUpperCase() + text6.substring(text6Espacio+2, text6.length).toLowerCase();

