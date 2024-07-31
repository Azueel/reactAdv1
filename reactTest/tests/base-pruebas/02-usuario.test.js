import { user, usuarioActivo } from '../../src/base-pruebas/02-usuario';

describe('Testando Componente Usuario', () => {
	test('user debe retornar un objeto', () => {
		const testUser = {
			id: 'abc123',
			username: 'pepito98',
		};

		const userFuncion = user();

		//para testear y comparar objetos utilizamos toEqual o toStricEqual
		expect(userFuncion).toEqual(testUser);
	});

	test('usuarioActivo debe retornar un objeto', () => {
		const name = 'alejo';
		const userActivo = usuarioActivo(name);

		expect(userActivo).toStrictEqual({
			id: '123',
			username: name,
		});
	});
});
