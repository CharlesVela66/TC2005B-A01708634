// Ejercicio 1
let table = document.getElementById("Ejercicio1");
let n = prompt("Dame un número");
let arr = new Array(n);
for (let i = 1; i <= n; i++){
    arr[i - 1] = {Numero: i, Numero_Al_Cuadrado: i * i, Numero_Al_Cubo: i*i*i};
}
let data = Object.keys(arr[0]);

generateTable(table, arr);
generateTableHead(table, data);

// Ejercicio 2
let num1 = Math.floor(Math.random() * 50) + 1;
let num2 = Math.floor(Math.random() * 50) + 1;
let result = num1 + num2;

const start = Date.now();
let input = prompt("¿Cuál es el resultado de la suma?: " + num1 + " + " +num2);
if (result == input){
    const end = Date.now();
    document.getElementById("Ejercicio2").innerHTML = `Tu respuesta es correcta. Tu tiempo total fue de: ${end - start} ms`;
}
else {
    const end = Date.now();
    document.getElementById("Ejercicio2").innerHTML = `Tu respuesta es incorrecta. Tu tiempo total fue de: ${end - start} ms`
}

// Ejercicio 3
function contador(arr){
    let pos = 0;
    let neg = 0;
    let zer = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            pos = pos + 1;
        }
        else if (arr[i] < 0){
            neg = neg + 1;
        }
        else {
            zer = zer + 1;
        }
    }
    document.getElementById("Ejercicio3").innerHTML = `Mayores a 0: ${pos}. Menores a 0: ${neg}. Iguales a 0: ${zer}`
}
const numbers = [10, 7, 0, 1, -8, -11, 0, 0, 1, -1, 35];
contador(numbers);

// Ejercicio 4
function promedios(matrix){
    let text =`[ `;
    for (let i = 0; i < matrix.length; i++){
        let sum = 0;
        for (let j = 0; j <matrix[i].length; j++){
            sum += matrix[i][j];
        }
        text += Math.floor((sum / matrix[i].length)) + ' ';
    }
    text+=(`]`);
    //console.log(text);
    document.getElementById("Ejercicio4").innerHTML = text;
}
let mat = [[1 , 6, 8, 9, 10], [3, 4, 5], [6, 1, 2, 7], [1], [8, 9, 7, 8, 6, 9, 8, 10]]
promedios(mat);

// Ejercicio 5
function inverso (num){
    let str = num.toString();
    let text = reverseString(str);
    document.getElementById("Ejercicio5").innerHTML = text;
}
inverso(123456789);

// Ejercicio 6
let width = prompt("Dame el ancho de la caja");
let height = prompt("Dame la altura de la caja");
if (width == 1 && height == 1){
    createLine(width);
}
else {
    createLine(width);
    createBox(width, height);
    createLine(width);
    let perimeter = getPerimeter(width, height);
    document.getElementById("Ejercicio6").innerHTML += `El perimetro es de ${perimeter} asteriscos`
}

// Funciones
function generateTableHead(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function createLine(width){
    let text = "";
    for (let i = 0; i < width; i++){
        text += "*";
    }
    document.getElementById("Ejercicio6").innerHTML += text + "<br>";
}

function createBox(w, h){
    for (let row = 1; row < h - 1; row++){
        let text = "*";
        for (let col = 1; col < w - 1; col++){
            text += "&nbsp;&nbsp;";
        }
        text += "*";
        text += "<br>";
        document.getElementById("Ejercicio6").innerHTML += text;
        console.log(row);
    }
}

function getPerimeter(a,b){
    if (a == 2){
        return b * 2; 
    }
    if (b == 2){
        return a * 2;
    }
    return 2 * a + 2 * b;
}