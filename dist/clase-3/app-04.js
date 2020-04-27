"use strict";
//Enumerados
var Cursos;
(function (Cursos) {
    Cursos[Cursos["Javascript"] = 0] = "Javascript";
    Cursos[Cursos["Typescript"] = 1] = "Typescript";
    Cursos[Cursos["Angular"] = 2] = "Angular";
})(Cursos || (Cursos = {}));
var DiasLaborales;
(function (DiasLaborales) {
    DiasLaborales[DiasLaborales["Lunes"] = 0] = "Lunes";
    DiasLaborales[DiasLaborales["Martes"] = 1] = "Martes";
    DiasLaborales[DiasLaborales["Miercoles"] = 2] = "Miercoles";
    DiasLaborales[DiasLaborales["Jueves"] = 3] = "Jueves";
    DiasLaborales[DiasLaborales["Viermes"] = 4] = "Viermes";
})(DiasLaborales || (DiasLaborales = {}));
var FinDeSemana;
(function (FinDeSemana) {
    FinDeSemana[FinDeSemana["Sabado"] = 6] = "Sabado";
    FinDeSemana[FinDeSemana["Domingo"] = 7] = "Domingo"; //Por lo tanto sigue a 7
})(FinDeSemana || (FinDeSemana = {}));
var Meses;
(function (Meses) {
    Meses["Enero"] = "Ene";
    Meses["Febrero"] = "Feb";
    Meses["Marzo"] = "Mar";
    Meses["Abril"] = "Abr";
})(Meses || (Meses = {}));
console.log("enum -> obtener posición: ", Cursos.Angular);
console.log("enum -> obtener descripción: ", Cursos[Cursos.Angular]);
console.log("enum -> obtener posición personalizada: ", Meses.Abril);
