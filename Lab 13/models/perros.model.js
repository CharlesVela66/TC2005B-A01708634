const perros = [
    { 
        nombre: "Duquesa",
        raza: "Beagle", 
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    {
        nombre: "Wilson",
        raza: "Golden",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Sparky",
        raza: "Husky",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: "Chilakil",
        raza: "Chihuahua",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: "Pugberto",
        raza: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    } 
];

module.exports = class Perro {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_perro) {
        this.nombre = nuevo_perro.nombre || '';
        this.raza = nuevo_perro.raza || '';
        this.imagen = nuevo_perro.imagen || 'https://bulma.io/images/placeholders/1280x960.png';
        this.descripcion = nuevo_perro.descripcion || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        perros.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return perros;
    }

}