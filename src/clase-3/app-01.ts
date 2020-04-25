//Tipos de Datos II 

//Alias Para Tipos de datos
let Alias:number | string;
Alias = "Axel";
Alias = 20;

console.log("Alias para tipo de datos: ", Alias);

function functionAlias():string | number{

    //return 500;
    return "Angular";

}

console.log("Alias para tipo de datos -> function: ", functionAlias());

let AliasArreglo : (string | number)[];
AliasArreglo = ["Axel", 20];

console.log("Alias para tipo de datos -> array: ", AliasArreglo);