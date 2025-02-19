let nombre = prompt("Ingrese su nombre:");
let grado = prompt("Ingrese su grado:");
let curso = prompt("Ingrese su curso:");

let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 60) {
    alert(nombre + " ha aprobado con un promedio de: " + promedio.toFixed(2));
} else {
    alert(nombre + " ha reprobado con un promedio de: " + promedio.toFixed(2));
}
