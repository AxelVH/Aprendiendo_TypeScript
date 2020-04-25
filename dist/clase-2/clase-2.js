"use strict";
//Tipos de Datos
//Tipos Primitivos o Tipos Basicos
//Boolean
var estaConectado = true;
var estaInscrito = true;
estaConectado = false;
estaInscrito = false;
//estaInscrito = "Axel"; No es valido
function tieneDescuento(curso) {
    if (curso == "typescript") {
        return true;
    }
    return false;
}
console.log("boolean: ", tieneDescuento("typescript"));
//Number
var decimal = 10;
var hexadecimal = 0xf00d;
console.log("number -> decimal: " + decimal);
console.log("number -> hexadecimal: " + hexadecimal);
//Type: Number, binario
var binario = 10;
console.log("number -> binario: ", binario);
//Type: Number, octal
var octal = 493;
console.log("number -> octal: ", octal);
//String
var nombre = "Axel";
var apellido = "Vasquez";
var nombreCompleto = nombre + " " + apellido;
console.log("string: ", nombreCompleto);
//Tipos especiales en Typescript
//Tipo: any
var desconocido;
desconocido = 15;
desconocido = "Axel any";
console.log("any: ", desconocido);
//Tipo: void
function MostrarContenido(curso) {
    var resultado = curso ? "Bienvedio al curso de " + curso : "Suscribete";
    console.log("void: ", resultado);
}
MostrarContenido("typescript");
//Tipo: never
function retornaError(error) {
    throw new Error("never: " + error);
    //Nunca retorna un valor
}
//retornaError("Ocurrio un error");
//Tipo: Null y Undefined
var variableUnifined = undefined;
console.log("undefined: ", variableUnifined);
var variableNull = null;
console.log("null: ", variableNull);
//Funciones
function Saludar(nombre) {
    if (nombre) {
        return "Hola " + nombre;
    }
    return "Ingrese un nombre";
}
console.log("funcion: ", Saludar("Axel"));
console.log("funcion -> parametros opcionales: ", Saludar());
//Arreglos
var ArregloCursos;
ArregloCursos = ["Typescript", "Angular"];
console.log("Arreglos: ", ArregloCursos);
//Arreglos con generics
var ArregloNombres;
ArregloNombres = ["Axel", "Vasquez"];
console.log("Arreglos genericos: ", ArregloNombres);
var ArregloAny;
ArregloAny = ["Angular", 500, true];
console.log("Arreglos genericos: ", ArregloAny);
//Tuplas
var TuplaCurso;
TuplaCurso = ["Typescript", 200, true];
console.log("Tupla: ", TuplaCurso);
var TuplaTemp1;
TuplaTemp1 = ["Axel", "Vasquez"];
var TuplaTemp2;
TuplaTemp2 = ["Yoliston", "Herrera"];
TuplaTemp1 = TuplaTemp2;
console.log("Tupla -> intercambiando: ", TuplaTemp1);
