const http = require('http');
const filesystem = require(`fs`);

const server = http.createServer( (request, response) => {   
    // Ponemos la config inicial para cada una de nuestras páginas
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head><meta charset="utf-8"></head><body>');

    // Si la página es la página principal, desplegar el siguiente contenido
    if (request.url === "/"){
        response.write("<a href = '/home'><button>Inicia Sesión</button></a>");
    }

    // Si el usuario ya inició sesión, desplegar los botones necesarios para que el usuario interactue con la pagina
    else if (request.url === "/home" ){

        response.write("<h1>¡Hola soy Carlos!</h1>");
        response.write("<a href = '/mensaje'><button>Mándame un mensaje</button></a><br><br>");
        response.write("<a href = 'https://www.instagram.com/charlesvelaa/?hl=es-la' target = _blank><button>Conoce más de mí</button></a><br><br>");
        response.write("<a href = 'https://open.spotify.com/show/5NeMWv3z5dagGZ74Ago8AG?si=5373adddec364c1f' target = _blank><button>Mi podcast</button></a><br>")
    }
    // Si el usuario quiere mandar un mensaje y no lo ha enviado, mostrar el siguiente contenido
    else if (request.url === "/mensaje" && request.method === "GET"){
        // Escribimos el html en la página del usuario con un formato con un metodo POST para que los datos se puedan enviar a un sitio
        response.write(`
        <form action="/mensaje" method="POST">>
        <label for="text_user">Escribe tu mensaje (Maximo 50 caracteres):</label>
        <input type="text" id="text_user" name="text" required
        minlength="1" maxlength="50" size="50">
        <input type="submit" value="Mandar Mensaje"/>
        </form>`);
    }
    // Si el usuario envió su mensaje, mostrar el siguiente contenido
    else if (request.url === "/mensaje" && request.method === "POST"){

        const datos = [];

        //Aquí obtenemos el mensaje en hexadecimal
        request.on('data', (dato) => {
            datos.push(dato);
        });

        return request.on('end', () =>{
            // Aquí transformamos el mensaje de hexadecimal a un string
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            response.write("<h1>Tu mensaje ha sido enviado con éxito</h1>");
            // Aquí obtenemos nada más el contenido en sí del mensaje, esto debido a que si por ejemplo el usuario ingresí "hola", la variable datos_completos tiene como valor text=hola, entonces hacemos un split y nos quedamos con el segundo elemento del split para obtener unicamente el mensaje
            // Agregamos el replace para que nos aparezcan espacios en blanco en lugar de un signo '+'
            const mensaje = datos_completos.split('=')[1].replace(/[+]/g,' ');
            console.log(mensaje);
            // Lo escribimos en un archivo txt 
            filesystem.writeFileSync("input.txt","El usuario envió el siguiente mensaje: " + mensaje);
        })

    }
    else {
        response.statusCode = 404;
        response.write("Whoops! No encontramos la pagina que quieres visualizar!");
    }
    response.end();    
});

server.listen(3000);