"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AnalizarClase(clase) {
    console.log("clave: ", clase.clave);
}
exports.AnalizarClase = AnalizarClase;
function mostrarPropiedades(clase) {
    for (var prop in clase.prototype) {
        console.log("prop", prop);
    }
}
exports.mostrarPropiedades = mostrarPropiedades;
