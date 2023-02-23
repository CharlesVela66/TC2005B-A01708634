console.log("Hola mundo");
console.info("Este script se está ejecutando desde una computadora y no desde el navegador");
console.warn("document, alert, confirm y prompt, no existen en el entorno de ejecución de node");
console.error("Así se ve un error");

// fs es el modulo para trabajar con el sistema de archivos
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 240, 1000, 50];

for (let item of arreglo){
    setTimeout(() => {
       console.log(item); // Los números se imprimiran de menor a mayor debido a que le estamos diciendo que el tiempo de ejecución es el elemento del arreglo, y como son asincronas, se ejecutan al mismo tiempo
    }, item);
}
console.log("Este log está después de imprimir el arreglo"); // Esta función no se detiene porque es asíncrona, significa que ejecuta todas las instrucciones a la vez, a comparación de la linea 8 que como es sincrona se tiene que ejecutar primero porque le especificamos que es sincrona
setTimeout(() => {console.log('Ya te hackie')},12000);

// http es el modulo que permite crear un servidor que pueda atender peticiones http
const http = require('http');

// Creacion de servidor
const server = http.createServer( ( //objeto de la peticion
    request, //objeto de la peticion
    response) => {//objeto que vamos a ir modificando y mandarle como respuesta al cliente
        console.log(request.url);
    }

)
server.listen(3000);
