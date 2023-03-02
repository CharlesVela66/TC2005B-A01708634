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
        response.write("<a href = '/mensaje'><button>Mándame un mensaje</button></a><br><br>");
        response.write("<a href = 'https://www.instagram.com/charlesvelaa/?hl=es-la' target = _blank><button>Conoce más de mí</button></a><br><br>");
        response.write("<a href = 'https://open.spotify.com/show/5NeMWv3z5dagGZ74Ago8AG?si=5373adddec364c1f' target = _blank><button>Mi podcast</button></a><br>")
    }
    else if (request.url === "/mensaje" && request.method === "GET"){
        response.write(`
        <form action="/mensaje" method="POST">>
        <label for="text_user">Escribe tu mensaje (Maximo 50 caracteres):</label>
        <input type="text" id="text_user" name="text" required
        minlength="1" maxlength="50" size="50">
        <input type="submit" value="Send Request" />
        </form>`)
    }
    else if (request.url === "/mensaje" && request.method === "POST"){
        response.write("<h1>Tu mensaje ha sido enviado con éxito</h1>")
    }
    else {
        response.statusCode = 404;
        response.write("Whoops! No encontramos la pagina que quieres visualizar!");
    }
    response.end();    
});

server.listen(3000);