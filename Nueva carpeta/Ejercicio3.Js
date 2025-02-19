let a, b, c;
a = parseInt(prompt("Ingrese el Precio del Producto"));

if (a > 200) {
    b = a * 0.20;
    c = a - b;
    alert("El total a pagar con descuento es: Q." + c);
} else {
    alert("El total a pagar es: Q." + a);
}

