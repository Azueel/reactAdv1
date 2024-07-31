import { retornarArreglo } from '../../src/base-pruebas/03-arreglos';

describe('Testeando Componente de Arreglo', () => {
	test('Debe retornar un valor tipo string y uno numerico', () => {
		const [texto, numero] = retornarArreglo();

		expect(texto).toBe('abc');
		expect(numero).toBe(123);

		expect(typeof texto).toBe('string');
		expect(typeof numero).toBe('number');
	});
});
