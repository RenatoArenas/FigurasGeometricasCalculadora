//Código de cuadrado
console.group("Cuadrado");

const lCuadrado = 0;
let perC = 0;
let areaC = 0;

function calculosCuadrado(a) {
    if (a > 0) {
        perC = a * 4;
        areaC = a ** 2;
    }
    else {
        perC = "";
        areaC = "";
    }
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
    if (l1 > 0 && l2 > 0 && b > 0) {
        perT = l1 + l2 + b;
    }
    else {
        perT = "";
    }
    if (b > 0 && h > 0) {
        areaT = (b * h)/2;
    }
    else {
        areaT = "";
    }
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
    if (r > 0) {
        diamCi = r * 2;
        perCi = diamCi * pi;
        areaCi = (r**2) * pi;
    }
    else {
        diamCi = "";
        perCi = "";
        areaCi = "";
    }
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

    const valC = document.getElementById("valoresCuadrado");
    valC.textContent = "l = " + valLadoC;

    const mostrarPerC = document.getElementById("perimetroCuadrado");
    mostrarPerC.textContent = perC;

    const mostrarArC= document.getElementById("areaCuadrado");
    mostrarArC.textContent = areaC;

    inpLadoC.value = "";
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

    const valT = document.getElementById("valoresTriangulo");
    valT.textContent = "l1 = " + valLado1T + ", l2 = " + valLado2T + ", b = " + valBaseT + ", h = " + valAlturaT;

    const mostrarPerT = document.getElementById("perimetroTriangulo");
    mostrarPerT.textContent = perT;

    const mostrarArT = document.getElementById("areaTriangulo");
    mostrarArT.textContent = areaT;

    inpLado1T.value = "";
    inpLado2T.value = "";
    inpBaseT.value = "";
    inpAlturaT.value = "";
}

function mostrarCirculo() {
    const inpRadioCi = document.getElementById("radioCirculo");
    const valRadioCi = Number(inpRadioCi.value);
    
    calculosCirculo(valRadioCi);

    const valCi = document.getElementById("valoresCirculo");
    valCi.textContent = "r = " + valRadioCi;

    const mostrarDiamCi = document.getElementById("diametroCirculo");
    mostrarDiamCi.textContent = diamCi;

    const mostrarPerCi = document.getElementById("perimetroCirculo");
    mostrarPerCi.textContent = perCi;

    const mostrarAreaPerCi = document.getElementById("areaCirculo");
    mostrarAreaPerCi.textContent = areaCi;

    inpRadioCi.value = "";
}