document.getElementById("right").addEventListener('click', moveTo_right);
document.getElementById("left").addEventListener('click', moveTo_left);

const right = document.getElementById("right");
const left = document.getElementById("left");
const title = document.getElementById("title");
const formT = document.getElementById("form-triangle");
const formTI = document.getElementById("form-triangleI");

function moveTo_right() {
    title.classList.add("slide-title");
    left.classList.remove("arrow-none");
    right.classList.add("arrow-none")
    formTI.classList.remove("form-none");
    formT.classList.add("form-none")
}

function moveTo_left() {
    title.classList.remove("slide-title");
    left.classList.add("arrow-none");
    right.classList.remove("arrow-none")
    formTI.classList.add("form-none");
    formT.classList.remove("form-none")
}