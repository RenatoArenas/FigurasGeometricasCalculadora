//Código de cuadrado
console.group("Cuadrado");

const lCuadrado = 6;
let perC = 0;
let areaC = 0;

console.log("Los lados del cuadrado valen: " + lCuadrado + "cm")

function calculosCuadrado(a) {
    perC = a * 4;
    areaC = a ** 2;
    return perC, areaC;
}
calculosCuadrado(lCuadrado);

console.log("El perimetro del cuadrado es: " + perC + "cm");
console.log("El área del cuadrado es: " + areaC + "cm^2");

console.groupEnd();

//Código de triángulo
console.group("Triangulo");

const lTriangulo1 = 3;
const lTriangulo2 = 4;
const bTriangulo = 5;
const hTriangulo = 5.5;
let perT = 0;
let areaT = 0;

console.log("Los lados del triángulo valen: " + lTriangulo1 + "cm, " + lTriangulo2 + "cm, " + bTriangulo + "cm");

function calculosTriangulo(l1, l2, b, h) {
    perT = l1 + l2 + b;
    areaT = (b * h)/2;
    return perT, areaT;
}
calculosTriangulo(lTriangulo1, lTriangulo2, bTriangulo, hTriangulo);

console.log("El perimetro del triangulo es: " + perT + "cm");
console.log("El área del triangulo es: " + areaT + "cm^2");

console.groupEnd();

//Código de circulo
console.group("Circulo");

const radio = 2;
const pi = Math.PI;
let diam = 0;
let perCi = 0;
let areaCi = 0;

function calculosCirculo(r) {
    diam = r * 2;
    perCi = diam * pi;
    areaCi = (r**2) * pi;
    return perCi, areaCi;
}

calculosCirculo(radio);

console.log("El radio es: " + radio);
console.log("El diametro es: " + diam);
console.log("El perimetro del circulo es: " + perCi + "cm");
console.log("El área del circulo es: " + areaCi + "cm^2");

console.groupEnd();