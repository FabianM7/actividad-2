let base = parseFloat(prompt("Ingrese la base del triángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

let area = (base * altura) / 2;

let mensaje = "El área del triángulo es " + area.toFixed(2);
console.log(mensaje);
