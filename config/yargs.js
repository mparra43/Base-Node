const { demandCommand, options } = require('yargs');

const argv = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandCommand:true,
    describe: 'crea un archivo txt con la trabla de la base'

})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandCommand:true,
    default: false,
    describe:'muestra la tabla en consola'
})
.option('lmt',{
    alias:'limite',
    type:'number',
    demandCommand:true,
    describe:'determina el nuemero de limite de la tabala de multiplicar'
})
.check((argv, options)=>{
    if(isNaN(argv.b)){
         throw'la base debe ser un numero'
    }
    return true
})
.check((argv, options)=>{
    if(isNaN(argv.lmt)){
         throw'el limite debe ser un numero'
    }
    return true
})
.argv;

module.exports = argv;