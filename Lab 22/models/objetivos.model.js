const db = require('../util/database');

module.exports = class Objetivos {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_objetivo) {
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute(`
            SELECT *
            FROM objetivo
        `);
    }
    

}