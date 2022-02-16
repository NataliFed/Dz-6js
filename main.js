"use strict"

function exponentiate(arg, exp){

    var result = [];

    for(var item of arg) {

        result.push(item**exp);

    }

    return result;
}

console.log(exponentiate([4, 1, 2, 5], 3));