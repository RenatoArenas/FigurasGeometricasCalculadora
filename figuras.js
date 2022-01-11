//Código de cuadrado
console.group("Cuadrado");

const lCuadrado = 0;
let perC = 0;
let areaC = 0;

function calculosCuadrado(a) {
    perC = a * 4;
    areaC = a ** 2;
    return perC, areaC;
}
calculosCuadrado(lCuadrado);

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
let diamCi = 0;
let perCi = 0;
let areaCi = 0;

function calculosCirculo(r) {
    diamCi = r * 2;
    perCi = diamCi * pi;
    areaCi = (r**2) * pi;
    return diamCi, perCi, areaCi;
}

calculosCirculo(radio);

console.log("El radio es: " + radio);
console.log("El diametro es: " + diamCi);
console.log("El perimetro del circulo es: " + perCi + "cm");
console.log("El área del circulo es: " + areaCi + "cm^2");

console.groupEnd();

//HTML interacción

function mostrarCuadrado() {
    const inpLadoC = document.getElementById("ladoCuadrado");
    const valLadoC = Number(inpLadoC.value);
    
    calculosCuadrado(valLadoC);

    const mostrarPerC = document.getElementById("perimetroCuadrado");
    mostrarPerC.textContent = "El perímetro es: " + perC;

    const mostrarArC= document.getElementById("areaCuadrado");
    mostrarArC.textContent = "El área es: " + areaC;
}

function mostrarTriangulo() {
    const inpLado1T = document.getElementById("ladoTriangulo1");
    const inpLado2T = document.getElementById("ladoTriangulo2");
    const inpBaseT = document.getElementById("baseTriangulo");
    const inpAlturaT = document.getElementById("alturaTriangulo");
    const valLado1T = Number(inpLado1T.value);
    const valLado2T = Number(inpLado2T.value);
    const valBaseT = Number(inpBaseT.value);
    const valAlturaT = Number(inpAlturaT.value);
    
    calculosTriangulo(valLado1T, valLado2T, valBaseT, valAlturaT);

    const mostrarPerT = document.getElementById("perimetroTriangulo");
    mostrarPerT.textContent = "El perímetro es: " + perT;

    const mostrarArT = document.getElementById("areaTriangulo");
    mostrarArT.textContent = "El área es: " + areaT;
}

function mostrarCirculo() {
    const inpRadioCi = document.getElementById("radioCirculo");
    const valRadioCi = Number(inpRadioCi.value);
    
    calculosCirculo(valRadioCi);

    const mostrarDiamCi = document.getElementById("diametroCirculo");
    mostrarDiamCi.textContent = "El diametro es: " + diamCi;

    const mostrarPerCi = document.getElementById("perimetroCirculo");
    mostrarPerCi.textContent = "El perímetro es: " + perCi;

    const mostrarAreaPerCi = document.getElementById("areaCirculo");
    mostrarAreaPerCi.textContent = "El area es: " + areaCi;
}