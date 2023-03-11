const mediciones = [
    {
        id: 1,
        fecha: "01/03/2023",
        brazo_der: 20,
        brazo_izq: 20,
        cadera: 30,
        cintura: 60,
        cuello: 15,
        pantorrilla_der: 20,
        pantorrilla_izq: 20,
        pecho: 50,
        peso: 65,
        pierna_der: 30,
        pierna_izq: 30
    },
    {
        id: 2,
        fecha: "02/03/2023",
        brazo_der: 25,
        brazo_izq: 24,
        cadera: 30,
        cintura: 61,
        cuello: 10,
        pantorrilla_der: 25,
        pantorrilla_izq: 25,
        pecho: 60,
        peso: 75,
        pierna_der: 20,
        pierna_izq: 20
    },
    {
        id: 3,
        fecha: "03/03/2023",
        brazo_der: 20,
        brazo_izq: 20,
        cadera: 30,
        cintura: 60,
        cuello: 15,
        pantorrilla_der: 20,
        pantorrilla_izq: 20,
        pecho: 50,
        peso: 65,
        pierna_der: 30,
        pierna_izq: 30
    },
    {
        id: 4,
        fecha: "04/03/2023",
        brazo_der: 25,
        brazo_izq: 24,
        cadera: 30,
        cintura: 61,
        cuello: 10,
        pantorrilla_der: 25,
        pantorrilla_izq: 25,
        pecho: 60,
        peso: 75,
        pierna_der: 20,
        pierna_izq: 20
    }
]

module.exports = class Progreso {
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        mediciones.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return mediciones;
    }

}