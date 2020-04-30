"use strict";
// export{}
// //Decoradores
// function Entidad(config:any){
//     console.log("Config: ", config);
//     return function(target:any){
//         target.clave = config.clave;
//         console.log("target: ", target);
//     }
// }
// function enumerable(value:boolean){
//     return function(target:any, propertyKey:string, descriptor: PropertyDescriptor){
//         descriptor.enumerable = value;
//     }
// }
// function readonly(target:any, name:any, descriptor:PropertyDescriptor){
//     descriptor.writable = false;
//     return descriptor;
// }
// @Entidad({
//     clave: "CURSO"
// })
// class Curso {
//     prueba:string;
//     constructor(private _id:number, private _nombre:string){
//         this.prueba = "";
//     }
//     @enumerable(false)
//     getPrueba(){
//         return this.prueba;
//     }
//     @readonly
//     lectura(){
//     }
//     get id(){
//         return this._id;
//     }
//     set id(id:number){
//         this._id = id;
//     }
//     get nombre(){
//         return this._nombre;
//     }
//     set nombre(nombre:string){
//         this._nombre = nombre;
//     }
// }
// @Entidad({
//     clave: "ESCUELA DIGITAL"
// })
// class EscuelaDigital{
//     constructor(private _paginaWeb:string){}
//     get paginaWeb(){
//         return this._paginaWeb;
//     }
//     set paginaWeb(paginaWeb:string){
//         this._paginaWeb = paginaWeb;
//     }
// }
// function AnalizarClase(clase:any){
//     console.log("clave: ", clase.clave);
// }
// function mostrarPropiedades(clase:any){
//     for(let prop in clase.prototype){
//         console.log("prop", prop);
//     }
// }
// let c_typescript = new Curso(1,"Typescript");
// let escuelaDigital = new EscuelaDigital("www.Axel.com")
// AnalizarClase(Curso);
// mostrarPropiedades(Curso);
// //c_typescript.lectura = function(){}; //Error: readonly
// AnalizarClase(EscuelaDigital);
