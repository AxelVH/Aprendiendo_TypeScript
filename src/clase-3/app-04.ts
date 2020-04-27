//Enumerados

enum Cursos {

    Javascript,
    Typescript,
    Angular

}

enum DiasLaborales {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viermes
}

enum FinDeSemana {
    Sabado = 6,
    Domingo //Por lo tanto sigue a 7
}

enum Meses {
    Enero = "Ene",
    Febrero = "Feb",
    Marzo = "Mar",
    Abril = "Abr"
}

console.log("enum -> obtener posición: ", Cursos.Angular);
console.log("enum -> obtener descripción: ", Cursos[Cursos.Angular]);

console.log("enum -> obtener posición personalizada: ", Meses.Abril);