//Aplicando correctamente las aserciones

let app_03_numero:any;
app_03_numero = "100";

let app_03_numero2:number = <number>app_03_numero;

console.log(app_03_numero2);

type app_03_Estudiante = {Curso: string, Precio: number};
let app_03_obj = <app_03_Estudiante>{};
app_03_obj.Curso = "Typescript";
app_03_obj.Precio = 200;

console.log(app_03_obj);

let app_03_obj_string:string = `{"Curso": "Angular", "Precio": 500}`;
let app_03_obj_parseado:app_03_Estudiante = <app_03_Estudiante>JSON.parse(app_03_obj_string);

console.log(app_03_obj_parseado);