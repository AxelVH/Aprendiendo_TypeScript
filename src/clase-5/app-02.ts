//Usar una libreria externa JavaScript: lodash
//package.json
//npm init -y
//npm install lodash --save

import {random} from 'lodash';

function numeroAleatorio(num1:number, num2:number):number{

    return random(num1,num2);

}

console.log(numeroAleatorio(1,10));

//www.definitelyTyped.org
//npm install @types/<libreria> --save-dev