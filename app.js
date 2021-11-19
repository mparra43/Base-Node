const {crearArchivo} = require('./helpers/multiplier')
const argv= require('./config/yargs')

console.clear();



crearArchivo(argv.b, argv.l, argv.lmt)