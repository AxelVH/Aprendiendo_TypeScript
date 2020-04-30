import {Curso} from './models/Curso';
import {EscuelaDigital} from './models/EscuelaDigital';
import {AnalizarClase, mostrarPropiedades} from './util'

let c_typescript = new Curso(1,"Typescript");
let escuelaDigital = new EscuelaDigital("www.Axel.com")
AnalizarClase(Curso);
mostrarPropiedades(Curso);
//c_typescript.lectura = function(){}; //Error: readonly
AnalizarClase(EscuelaDigital);