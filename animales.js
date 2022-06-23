let perros = [];
let gatos = []; 

class Mamifero {
    /**
     * 
     * @param {boolean} habitat 
     * @param {string} homeotermo 
     * @param {string} extremidades 
     * @param {number} parentalidad 
     * @param {string} especie 
     * @param {boolean} domestico 
     */
    constructor(habitat, homeotermo, extremidades, parentalidad, especie, domestico){
        this.habitat = habitat; 
        this.homeotermo = homeotermo;
        this.extremidades = extremidades;
        this.parentalidad = parentalidad; 
        this.especie = especie;
        this.domestico = domestico;
    }
};

class Perro extends Mamifero {
    /**
     * 
     * @param {boolean} habitat 
     * @param {string} homeotermo 
     * @param {string} extremidades 
     * @param {number} parentalidad 
     * @param {string} especie 
     * @param {boolean} domestico 
     * @param {string} nombre 
     * @param {number} edad 
     */
    constructor(habitat, homeotermo, extremidades, parentalidad, especie, domestico, nombre, edad) {
        super(habitat, homeotermo, extremidades, parentalidad, especie, domestico);
        this.nombre = nombre;
        this.edad = edad;
    }
    
    /**
     * 
     * @returns array
     */
    static guardarPerrito() {

        const perro = new Perro(false, 'Sangre caliente', 'Patas', 8, 'canino', true, 'Odashi', 4);
        perros.push(perro);
        return perros
    }
}

class Gato extends Mamifero {
    /**
     * 
     * @param {boolean} habitat 
     * @param {string} homeotermo 
     * @param {string} extremidades 
     * @param {number} parentalidad 
     * @param {string} especie 
     * @param {boolean} domestico 
     * @param {string} nombre 
     * @param {number} edad 
     */
    constructor(habitat, homeotermo, extremidades, parentalidad, especie, domestico, nombre, edad){
        super(habitat, homeotermo, extremidades, parentalidad, especie, domestico);
        this.nombre = nombre;
        this.edad = edad;
    }

    /**
     * 
     * @returns array
     */
    static guardarGatito() {

        const gato = new Gato(false, 'Sangre caliente', 'Patas', 8, 'felino', true, 'Vader', 4);
        gatos.push(gato);
        return gatos
    }
};

var saludo = 'Hola'

console.log(Perro.guardarPerrito());
console.log(Gato.guardarGatito());

console.log( `${saludo}, tenemos un total de ${perros.length} perros y ${gatos.length} gatos, en nuestra base de datos. `)