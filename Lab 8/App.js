const ejercicio1 = (arr) =>{
    let suma = 0;
    for (let item of arr){
        suma += item;
    }
    console.log(`El resultado es: ${suma / arr.length}`);
}
const arreglo = [0,1,2,3,4,5,6,7,8,9,10];
ejercicio1(arreglo);

const ejercicio2 = (string) => {
    const filesystem = require('fs');
    filesystem.writeFileSync('ejercicio2.txt',`El string es ${string}`);
}
ejercicio2("Hola mundo");

const ejercicio3 = (n) => {
    // isLucky
    // Se le llama a un entero un "numero suertudo" si cumple con las siguientes dos condiciones
    // 1) Es un entero con una longitud par 
    // 2) Que la suma de los digitos de la primera mitad del entero sea igual a la suma de la segunda mitad
    // Esta función regresará si el numero dado es un Lucky Number
    let size = n.toString().length;
    if (size % 2 !== 0){
        return false;
    }
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < size / 2; i++){
        sum2 += n % 10;
        //console.log(sum2);
        n = Math.trunc(n /= 10);
        
    }
    while (n > 0){
        sum1 += n % 10;
        //console.log(sum1);
        n = Math.trunc(n /= 10);
    }
    return sum1 === sum2;
}
console.log(ejercicio3(70106));
console.log(ejercicio3(89117723));

const http = require('http');
let fs = require(`fs`);


let handleRequest = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    fs.readFile('../Lab 5/index.html', null, function (error, data) {
        if (error){
            response.setHeader(404);
            response.write('Estas bien mal');
        }
        else {
            response.write(data);
        }
        response.end();
    });
};
http.createServer(handleRequest).listen(8000);

/*
// http es el modulo que permite crear un servidor que pueda atender peticiones http
const http = require('http');

// Creacion de servidor
const server = http.createServer( ( //objeto de la peticion
    request, //objeto de la peticion
    response) => {//objeto que vamos a ir modificando y mandarle como respuesta al cliente
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write("Saludos");
        response.end();
    }

)
server.listen(3000);*/