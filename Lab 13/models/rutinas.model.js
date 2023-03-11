const rutinas= [
    {
        id: "1",
        nombre: "Para principiantes",
        tipo: "Subir peso",
        descripcion: "Esta rutina va dirigida hacia las personas que van empezando en el gimnasio",
        frecuencia: 5,
    },
    {
        id: "2",
        nombre: "Full Cardio",
        tipo: "Perder peso",
        descripcion: "Esta rutina va dirigida hacia las personas que quieran perder peso",
        frecuencia: 5,
    },
    {
        id: "3",
        nombre: "Más avanzados",
        tipo: "Subir peso",
        descripcion: "Esta rutina va dirigida hacia las personas que quieren icrementar su fuerza y que ya llevan tiempo entrenando",
        frecuencia: 5,
    },
    {
        id: "4",
        nombre: "Para los que no tienen mucho tiempo",
        tipo: "Mantener peso",
        descripcion: "Esta rutina va dirigida hacia las personas que no pueden invertir mucho tiempo para entrenar",
        frecuencia: 3,
    }
]

module.exports = class Rutina {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_rutina) {
        this.id = nueva_rutina.id || "0";
        this.nombre = nueva_rutina.nombre || "";
        this.tipo = nueva_rutina.tipo || "";
        this.descripcion = nueva_rutina.descripcion || "";
        this.frecuencia = nueva_rutina.frecuencia || "De Frecuencia Libre";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        rutinas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return rutinas;
    }
    

}