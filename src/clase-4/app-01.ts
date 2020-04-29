//POO

//Clases y Constructores

class EscuelaDigital {

    constructor(nombre:string){
        this.nombre = nombre;
    }

    nombre:string;
    cursos:string[] = [];
    agregarCurso(curso:string):void{

        this.cursos.push(curso);

    }

}

let new_ed = new EscuelaDigital("EDteam");
new_ed.agregarCurso("Javascript");
new_ed.agregarCurso("Typescript");
new_ed.agregarCurso("Angular");
console.log(new_ed);