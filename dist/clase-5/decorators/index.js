"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Entidad(config) {
    console.log("Config: ", config);
    return function (target) {
        target.clave = config.clave;
        console.log("target: ", target);
    };
}
exports.Entidad = Entidad;
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
exports.enumerable = enumerable;
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
exports.readonly = readonly;
