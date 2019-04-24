const fs = require('fs');
const colors = require('colors');

const listar = (base, limite) => {
  console.log('===================='.green);
  console.log(`====Tabla del ${base}====`.green);
  console.log('===================='.green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} x ${i} = ${base * i}\n`);
  }
};

const crearArchivo = async (base, limite = 10) => {
  if (!Number(base)) {
    return 'Debe ingresar un numero';
  }

  let data = '';

  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }

  fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
    if (err) return 'El archivo no pudo ser creado';
  });

  return `tabla-${base}.txt`.blue;
};

module.exports = {
  crearArchivo,
  listar
};
