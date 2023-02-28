const http = require('http');
let fs = require(`fs`);

const server = http.createServer( (request, response) => {   
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head><meta charset="utf-8"></head><body>');
    if (request.url === "/"){
        response.write("<a href = '/home'><button>Inicia Sesión</button></a>");
    }
    else if (request.url === "/home" ){

        response.write("<h1>¡Hola soy Carlos!</h1>");
        response.write("<a href = '/mensaje'><button>Mándame un mensaje</button></a><br>");
        response.write("<a href = 'https://www.instagram.com/charlesvelaa/?hl=es-la'><button>Conoce más de mí</button></a><br>");
    }
    else if (request.url === "/mensaje" && request.method === "GET"){
        response.write("<h1>Hola</h1>")
    }
    else if (request.url === "/mensaje" && request.method === "POST"){
        response.write("<h1>Hola</h1>")
    }
    else {
        response.statusCode = 404;
        response.write("Whoops! No encontramos la pagina que quieres visualizar!");
    }
    response.end();    
});

server.listen(3000);