
export {AnalizarClase, mostrarPropiedades};

function AnalizarClase(clase:any){
    console.log("clave: ", clase.clave);
}

function mostrarPropiedades(clase:any){
    for(let prop in clase.prototype){
        console.log("prop", prop);
    }
}