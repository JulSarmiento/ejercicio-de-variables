let perros = [];
let gatos = []; 

class Mamifero {
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
    constructor(habitat, homeotermo, extremidades, parentalidad, especie, domestico, nombre, edad) {
        super(habitat, homeotermo, extremidades, parentalidad, especie, domestico);
        this.nombre = nombre;
        this.edad = edad;
    }
    
    static guardarPerrito() {

        const perro = new Perro('No tiene', 'Sangre caliente', 'Patas', '8 semanas', 'canino', 'si', 'Odashi', '4 años');
        perros.push(perro);
        return perros
    }
}

class Gato extends Mamifero {
    constructor(habitat, homeotermo, extremidades, parentalidad, especie, domestico, nombre, edad){
        super(habitat, homeotermo, extremidades, parentalidad, especie, domestico);
        this.nombre = nombre;
        this.edad = edad;
    }

    static guardarGatito() {

        const gato = new Gato('No tiene', 'Sangre caliente', 'Patas', '12 semanas', 'felino', 'si', 'Vader', '2 años');
        gatos.push(gato);
        return gatos
    }
};

var saludo = 'Hola'

console.log(Perro.guardarPerrito());
console.log(Gato.guardarGatito());

console.log( `${saludo}, tenemos un total de ${perros.length} perros y ${gatos.length} gatos, en nuestra base de datos. `)