//Interfaces
interface IPersona {

    Nombre:string,
    Apellido?:string

}

let Persona_1:IPersona = {

    Nombre: "Axel",
    Apellido: "Vasquez"

}

Persona_1 = {

    Nombre: "Yoliston"

}

console.log("Interface: ", Persona_1);

//Extendiendo | Herencia

interface IPersonaEdad extends IPersona {

    Edad: number

}

let PersonaEdad:IPersonaEdad = {

    Nombre: "Axel", //IPersona
    Apellido: "Vasquez", //IPersona
    Edad: 20 //IPersonaEdad

}

console.log("interface extends: ", PersonaEdad);