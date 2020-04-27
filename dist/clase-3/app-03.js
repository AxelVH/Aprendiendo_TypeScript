"use strict";
//Aplicando correctamente las aserciones
var app_03_numero;
app_03_numero = "100";
var app_03_numero2 = app_03_numero;
console.log(app_03_numero2);
var app_03_obj = {};
app_03_obj.Curso = "Typescript";
app_03_obj.Precio = 200;
console.log(app_03_obj);
var app_03_obj_string = "{\"Curso\": \"Angular\", \"Precio\": 500}";
var app_03_obj_parseado = JSON.parse(app_03_obj_string);
console.log(app_03_obj_parseado);
