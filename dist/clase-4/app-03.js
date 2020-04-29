"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Miembros privado
//se puede modificar dentro de la clase
var Curso = /** @class */ (function () {
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(nombre) {
        this.nombre = nombre;
        this.cursos = [];
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var new_ed = new EscuelaDigital("EDteam");
var curso_ts = new Curso(1, "Typescript");
var curso_js = new Curso(2, "Javascript");
new_ed.agregarCurso(curso_ts);
new_ed.agregarCurso(curso_js);
console.log(new_ed);
