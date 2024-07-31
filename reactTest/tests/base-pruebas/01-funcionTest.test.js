import { saludo } from '../../src/base-pruebas/01-funcionTest';

describe('Testando Componente 01-Funciones', () => {
	test("la funcion saludo debe retornar 'Hola Alejo'", () => {
		const name = 'Alejo';
		const mensaje = saludo(name);

		//toBe para comparar valores
		expect(mensaje).toBe(`Hola ${name}`);
	});
});
