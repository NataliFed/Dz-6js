// "use strict"
// var result = [];

// function render (arg, exp){

//     for(var item of arg) {

//         result += item**exp;
//         // result = result.split('');
//     }
   
//     console.log(result);

// }
// render([4, 20, 15, 8], 2);


"use strict"


function exponentiate(arg, exp){
    var result = [];
    for(var item of arg) {
        result.push(item**exp);
    }
    return result;
}
console.log(exponentiate([4, 1, 2, 5], 2));