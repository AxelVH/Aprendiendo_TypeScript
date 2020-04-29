export {}

//Miembros publicos

class Curso {

    constructor(Id:number, Nombre:string){
        this.Id = Id,
        this.Nombre = Nombre
    }

    public Id:number;
    public Nombre:string

}

class EscuelaDigital {

    constructor(nombre:string){
        this.nombre = nombre;
    }

    public nombre:string;
    public cursos:Curso[] = [];
    public agregarCurso(curso:Curso):void{

        this.cursos.push(curso);

    }

}

let new_ed = new EscuelaDigital("EDteam");
let curso_ts = new Curso(1, "Typescript");
let curso_js = new Curso(2, "Javascript");

new_ed.agregarCurso(curso_ts);
new_ed.agregarCurso(curso_js);

console.log(new_ed);