"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Curso_1 = require("./models/Curso");
var EscuelaDigital_1 = require("./models/EscuelaDigital");
var util_1 = require("./util");
var c_typescript = new Curso_1.Curso(1, "Typescript");
var escuelaDigital = new EscuelaDigital_1.EscuelaDigital("www.Axel.com");
util_1.AnalizarClase(Curso_1.Curso);
util_1.mostrarPropiedades(Curso_1.Curso);
//c_typescript.lectura = function(){}; //Error: readonly
util_1.AnalizarClase(EscuelaDigital_1.EscuelaDigital);
