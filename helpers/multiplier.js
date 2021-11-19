// requireds
const fs = require('fs');
const colors = require('colors');
const { skipValidation } = require('yargs');

let listarTabla = (base) => {

    console.log('==================');
    console.log(`tabla de ${base}`);
    console.log('==================');

    let salida = '';

    for (let i = 1; i <= limite; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
    }

    return salida

}


let crearArchivo = async (base, listar, limite ) => {


    try {
    
        let salida = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('=================='.green);
            console.log(`tabla de ${base}`);
            console.log('=================='.green);
            console.log(salida);
        }

        fs.writeFileSync(`./exit/tabla-${base}.txt `, salida)

        console.log(`se ha creado el archivo tabla-${base}.txt`)
        return `tabla-${base}.txt `
    }
    catch(err) {
        throw err

    }


}

module.exports = {
    crearArchivo,
}