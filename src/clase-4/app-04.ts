export {}

//Miembros privado
//se puede modificar dentro de la clase

class Curso {

    constructor(private _id:number, private _nombre:string){}

    get id(){
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

}

class EscuelaDigital {

    constructor(private _nombre:string){}

    public cursos:Curso[] = []

    public agregarCurso(curso:Curso):void{

        this.cursos.push(curso);

    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

}

let new_ed = new EscuelaDigital("EDteam");
let curso_ts = new Curso(1, "Typescript");
let curso_js = new Curso(2, "Javascript");

new_ed.agregarCurso(curso_ts);
new_ed.agregarCurso(curso_js);

console.log(new_ed);
console.log(new_ed.nombre);