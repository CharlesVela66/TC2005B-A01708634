const registros= [
    {
        id: 1,
        fecha: "28/02/2023",
        nivel_satisf: 4,
        descr_sesion: "5x10 Lagartijas 3x5 Bench 50kg",
        comentarios: "Nada mal la rutina",
        id_Usuario: "CEVE0904"
    },
    {
        id: 2,
        fecha: "01/03/2023",
        nivel_satisf: 1,
        descr_sesion: "1x1 Squat",
        comentarios: "Apenas en el primer ejercicio me lesione",
        id_Usuario: "CEVE0904"
    },
    {
        id: 3,
        fecha: "02/03/2023",
        nivel_satisf: 5,
        descr_sesion: "3x10 Bicep Curl 100kg",
        comentarios: "No fue nada la lesion de ayer",
        id_Usuario: "CEVE0904"
    }
]

module.exports = class Bitacora {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_registro) {
        this.id = nuevo_registro.id || 0;
        this.fecha = nuevo_registro.fecha || Date.now();
        this.descr_sesion = nuevo_registro.descr_sesion || "No hubo descripcion";
        this.nivel_satisf = nuevo_registro.nivel_satisf || "No marcó nivel de satisfacción";
        this.comentarios = nuevo_registro.comentarios || "No agregó comentarios";
        this.id_Usuario = nuevo_registro.id_Usuario || "No se pudo obtener el id del usuario";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        registros.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return registros;
    }

}