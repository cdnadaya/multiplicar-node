//requireds

//const fs = require('express'); paquetes externos a node
//const fs = require('./fs'); paquetes o archivos del propio proyecto

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.red(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]