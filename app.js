const { argv } = require('./config/yargs');
const { crearArchivo, listar } = require("./multiplicar/multiplicar");

const comando = argv._[0];

switch (comando) {
  case "listar":
    listar(argv.base, argv.limite);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`El archivo ${archivo} fue creado`))
      .catch(err => console.log(err));
    break;
  default:
    console.log("Comando no reconocido");
}
