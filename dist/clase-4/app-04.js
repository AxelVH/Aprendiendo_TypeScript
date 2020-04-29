"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Miembros privado
//se puede modificar dentro de la clase
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(_nombre) {
        this._nombre = _nombre;
        this.cursos = [];
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    Object.defineProperty(EscuelaDigital.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return EscuelaDigital;
}());
var new_ed = new EscuelaDigital("EDteam");
var curso_ts = new Curso(1, "Typescript");
var curso_js = new Curso(2, "Javascript");
new_ed.agregarCurso(curso_ts);
new_ed.agregarCurso(curso_js);
console.log(new_ed);
console.log(new_ed.nombre);
