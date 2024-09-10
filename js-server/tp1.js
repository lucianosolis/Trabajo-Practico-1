const fs = require("fs")

const arrayTp=[2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false];

const condicion=true;


const crearArray=function(array,dato){

    mensajeError="Operacion exitosa"
    
    if(dato===null || dato===undefined){
        mensajeError="la condicion ingresada no es valida"
        
    }else{
        let nuevoArray = [...array, dato];
        let nuevoArrayOrdenado = [...new Set(nuevoArray)];
        const numeros = nuevoArrayOrdenado.filter(item => typeof item === 'number').sort((a, b) => a - b);
        const cadenas = nuevoArrayOrdenado.filter(item => typeof item === 'string').sort();
        const booleans = nuevoArrayOrdenado.filter(item => typeof item === 'boolean').sort((a, b) => a - b);
        const sortedArray = [...numeros, ...cadenas, ...booleans];
        fs.writeFileSync("guardarArray.txt", sortedArray.join(", "))
    }

    return mensajeError
}

console.log(crearArray(arrayTp,condicion))

