let pass = document.getElementById("contraseña");
let pass2 = document.getElementById("re-contraseña");
let may = document.getElementById("mayuscula");
let min = document.getElementById("minuscula");
let car = document.getElementById("caracter_especial");
let num = document.getElementById("numero");
let len = document.getElementById("longitud");


function validar(){

    // Comparamos la contraseña a ver si cumple los requisitos de cada condición
    if (pass.value.match(/[0-9]/)){
        num.style.color = "green";
    }
    else {
        num.style.color = "red";
    }

    if (pass.value.match(/[A-Z]/)){
        may.style.color = "green";
    }
    else {
        may.style.color = "red";
    }
    if (pass.value.match(/[a-z]/)){
        min.style.color = "green";
    }
    else {
        min.style.color = "red";
    }
    if (pass.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\:\;\'\"\<\>\?\/]/)){
        car.style.color = "green";
    }
    else {
        car.style.color = "red";
    }
    if (pass.value.length >= 6){
        len.style.color = "green";
    }
    else {
        len.style.color = "red";
    }
}
function comparar(){

    if (pass.value == pass2.value && (may.style.color && min.style.color && car.style.color && num.style.color && len.style.color) == "green"){
        may.style.display = 'none';
        min.style.display = 'none';
        car.style.display = 'none';
        num.style.display = 'none';
        len.style.display = 'none';
        alert("Las contraseñas son idénticas y válidas!");
    }
    else {
        may.style.display = 'block';
        min.style.display = 'block';
        car.style.display = 'block';
        num.style.display = 'block';
        len.style.display = 'block';
    }
}
