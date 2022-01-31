//Código de cuadrado

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


//Código de triángulo

let perT = 0;
let areaT = 0;


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

//Código de triangulo isósceles

const lTrianguloI1 = 2;
const lTrianguloI2 = 2;
const bTrianguloI = 3;
let hTI = 0;
function calculosTrianguloIsosceles(l1, l2, b) {
    if (l1 == l2 && 2*l1 >= b) {
        hTI = Math.sqrt(l1**2 - (b**2/4));
    }
    else {
        hTI = "El triangulo no es isósceles o es imposible";
    }
    if (hTI == 0) {
        hTI = "El triangulo no es isósceles o es imposible"
    }
    return hTI;
}
//Código de circulo

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

function mostrarTrianguloIsosceles() {
    const inpLado1TI = document.getElementById("ladoTrianguloI1");
    const inpLado2TI = document.getElementById("ladoTrianguloI2");
    const inpBaseTI = document.getElementById("baseTrianguloI");
    const valLado1TI = Number(inpLado1TI.value);
    const valLado2TI = Number(inpLado2TI.value);
    const valBaseTI = Number(inpBaseTI.value);

    calculosTrianguloIsosceles(valLado1TI, valLado2TI, valBaseTI);
    console.log(hTI);

    const valTI = document.getElementById("valoresTrianguloI");
    valTI.textContent = "l1 = " + valLado1TI + ", l2 = " + valLado2TI + ", b = " + valBaseTI;

    const mostrarAltTI = document.getElementById("alturaTrianguloI");
    mostrarAltTI.textContent = hTI;

    inpLado1TI.value = "";
    inpLado2TI.value = "";
    inpBaseTI.value = "";
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