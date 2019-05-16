const {obtenerPromedio, argv} = require('./Datos.js');

console.log(argv);
if(argv._[0] == 'promedio') {
	console.log('El estudiante ' + argv.n + ' tiene un promedio de ' + obtenerPromedio(argv.m, argv.i, argv.p));	
}
else {
	console.log('Promedio no calculado');
}