export {}

//Miembros privado
//se puede modificar dentro de la clase

class Curso {

    constructor(private id:number, private nombre:string){}

}

class EscuelaDigital {

    constructor(private nombre:string){}

    private cursos:Curso[] = [];

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