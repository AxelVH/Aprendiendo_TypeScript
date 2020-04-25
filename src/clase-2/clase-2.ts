//Tipos de Datos

//Tipos Primitivos o Tipos Basicos

//Boolean
let estaConectado = true;
let estaInscrito:boolean = true;

estaConectado = false;
estaInscrito = false;

//estaInscrito = "Axel"; No es valido

function tieneDescuento(curso:string):boolean{

    if(curso == "typescript"){
        return true;
    }

    return false;

}

console.log("boolean: ", tieneDescuento("typescript"))

//Number
let decimal:number = 10;
let hexadecimal:number = 0xf00d;
console.log("number -> decimal: " + decimal);
console.log("number -> hexadecimal: " + hexadecimal);

//Type: Number, binario
let binario:number = 0b1010;
console.log("number -> binario: ", binario);

//Type: Number, octal
let octal: number = 0o755;
console.log("number -> octal: ", octal);

//String
let nombre = "Axel";
let apellido: string = "Vasquez";
let nombreCompleto:string = `${nombre} ${apellido}`;
console.log("string: ",nombreCompleto);

//Tipos especiales en Typescript

//Tipo: any
let desconocido;
desconocido = 15;
desconocido = "Axel any";
console.log("any: ", desconocido);

//Tipo: void

function MostrarContenido(curso:string): void{

    let resultado = curso ? `Bienvedio al curso de ${curso}` : "Suscribete";
    
    console.log("void: ",resultado);

}

MostrarContenido("typescript");

//Tipo: never

function retornaError(error:string): never{

    throw new Error("never: " + error);
    //Nunca retorna un valor

}

//retornaError("Ocurrio un error");

//Tipo: Null y Undefined

let variableUnifined:undefined = undefined;
console.log("undefined: ", variableUnifined);

let variableNull:null = null;
console.log("null: ", variableNull);

//Funciones

function Saludar(nombre?:string):string{

    if(nombre){
        return "Hola " + nombre;
    }

    return "Ingrese un nombre";

}

console.log("funcion: ", Saludar("Axel"));
console.log("funcion -> parametros opcionales: ", Saludar());

//Arreglos

let ArregloCursos:string[];
ArregloCursos = ["Typescript", "Angular"];
console.log("Arreglos: ", ArregloCursos);

//Arreglos con generics

let ArregloNombres: Array<string>;
ArregloNombres = ["Axel", "Vasquez"];
console.log("Arreglos genericos: ", ArregloNombres);

let ArregloAny: Array<any>;
ArregloAny = ["Angular", 500, true]
console.log("Arreglos genericos: ", ArregloAny);

//Tuplas
let TuplaCurso:[string, number ,boolean];
TuplaCurso = ["Typescript", 200, true];

console.log("Tupla: ", TuplaCurso);

let TuplaTemp1:[string, string];
TuplaTemp1 = ["Axel", "Vasquez"]

let TuplaTemp2:[string, string];
TuplaTemp2 = ["Yoliston", "Herrera"];

TuplaTemp1 = TuplaTemp2;

console.log("Tupla -> intercambiando: ", TuplaTemp1);