
import {Entidad} from '../decorators';

@Entidad({
    clave: "ESCUELA DIGITAL"
})
export class EscuelaDigital{
    
    constructor(private _paginaWeb:string){}

    get paginaWeb(){
        return this._paginaWeb;
    }

    set paginaWeb(paginaWeb:string){
        this._paginaWeb = paginaWeb;
    }

}