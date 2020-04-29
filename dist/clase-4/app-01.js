"use strict";
//POO
//Clases y Constructores
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(nombre) {
        this.cursos = [];
        this.nombre = nombre;
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var new_ed = new EscuelaDigital("EDteam");
new_ed.agregarCurso("Javascript");
new_ed.agregarCurso("Typescript");
new_ed.agregarCurso("Angular");
console.log(new_ed);
