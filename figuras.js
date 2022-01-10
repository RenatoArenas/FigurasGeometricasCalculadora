//Código de cuadrado
console.group("Cuadrado");

const lCuadrado = 3;

console.log("Los lados del cuadrado valen: " + lCuadrado + "cm")

function calculosCuadrado(a) {
    const per = a * 4;
    const area = a ** 2;
    console.log("El perimetro del cuadrado es: " + per + "cm");
    console.log("El área del cuadrado es: " + area + "cm^2");
}
calculosCuadrado(lCuadrado);

console.groupEnd();

//Código de triángulo
console.group("Triangulo");

const lTriangulo1 = 3;
const lTriangulo2 = 4;
const bTriangulo = 5;
const hTriangulo = 5.5;

console.log("Los lados del triángulo valen: " + lTriangulo1 + "cm, " + lTriangulo2 + "cm, " + bTriangulo + "cm");

function calculosTriangulo(l1, l2, b, h) {
    const per = l1 + l2 + b;
    const area = (b * h)/2;
    console.log("El perimetro del triangulo es: " + per + "cm");
    console.log("El área del cuadrado es: " + area + "cm^2");
}
calculosTriangulo(lTriangulo1, lTriangulo2, bTriangulo, hTriangulo);

console.groupEnd();

//Código de circulo
console.group("Circulo");

const radio = 2;
const diametro = 2 * radio;
const pi = Math.PI;

console.log("El radio es: " + radio);
console.log("El diametro es: " + diametro);

function calculosCirculo(r, d, p) {
    const per = d * p;
    const area = (r**2) * p
    console.log("El perimetro del circulo es: " + per + "cm");
    console.log("El área del circulo es: " + area + "cm^2");
}

calculosCirculo(radio, diametro, pi);

console.groupEnd();