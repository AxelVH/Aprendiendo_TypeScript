export {}

//Atributos y metodos estaticos / static

class Curso {

    static Cursos:string = "Typescript, Angular";

    constructor(private readonly _id:number, private readonly _nombre:string){}

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }

    static getInfo(curso:Curso){
        return JSON.stringify(curso);
    }

}

abstract class Escuela {

    protected cursos:Curso[] = []

    constructor(protected _id:number, protected _nombre:string){}

    public agregarCurso(curso:Curso):void{
        this.cursos.push(curso);
    }

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

class EscuelaDigital extends Escuela {

    constructor(id:number, nombre:string, private _paginaWeb:string){
        super(id,nombre);
    }

    get paginaWeb(){
        return this._paginaWeb;
    }

    set paginaWeb(paginaWeb:string){
        this._paginaWeb = paginaWeb;
    }

}


//let new_escuela = new Escuela(1,"EDAxel"); //es una clase abstract y por lo tanto no se puede crear un objeto de esta clase
let new_ed = new EscuelaDigital(1,"EDteam", "wwww.EDteam.com");

let curso_ts = new Curso(1, "Typescript");
let curso_js = new Curso(2, "Javascript");
new_ed.agregarCurso(curso_ts);
new_ed.agregarCurso(curso_js);

console.log(new_ed);
console.log(Curso.Cursos);
console.log(Curso.getInfo(curso_js));