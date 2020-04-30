"use strict";
//Usar una libreria externa JavaScript: lodash
//package.json
//npm init -y
//npm install lodash --save
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function numeroAleatorio(num1, num2) {
    return lodash_1.random(num1, num2);
}
console.log(numeroAleatorio(1, 10));
//www.definitelyTyped.org
//npm install @types/<libreria> --save-dev
