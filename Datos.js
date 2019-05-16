const opciones = {
	nombre: {
		demand: true,
		alias: 'n'
	}, 
	matematicas: {
		demand: true,
		alias: 'm'
	},
	ingles: {
		demand: true,
		alias: 'i'
	}, 
	programacion: {
		demand: true,
		alias: 'p'
	}
}

let obtenerPromedio = (nota1, nota2, nota3) => (nota1+ nota2 + nota3)/3;

const argv = require('yargs')
			 .command('promedio', 'Calcular el Promedio', opciones)
			 .argv

module.exports = {
	obtenerPromedio,
	argv
};