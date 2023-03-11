const dietas= [
    {
        id: "1",
        nombre: "Pollo y Pescado",
        tipo_dieta: "Subir de peso",
        id_macro: "MAC0101",
        id_micro: "MIC0101"
    }
]

module.exports = class DietaFavorita {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_dieta) {
        this.id = nueva_dieta.id || "0";
        this.nombre = nueva_dieta.nombre || "";
        this.tipo_dieta = nueva_dieta.tipo_dieta || "";
        this.id_macro = nueva_dieta.id_macro || "";
        this.id_micro = nueva_dieta.id_micro || "";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        dietas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return dietas;
    }
    

}