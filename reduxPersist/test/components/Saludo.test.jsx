import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Saludo from '../../src/Components/Saludo';
import '@testing-library/jest-dom';

describe('Testeando componente <Saludo/>', () => {
	test('Renderizado de input y boton correctamente', () => {
		const { getByTestId } = render(<Saludo />);

		const inputForm = getByTestId('inputForm');
		const submitFormBtn = getByTestId('submitFormBtn');

		expect(inputForm).toBeInTheDocument();
		expect(submitFormBtn).toBeInTheDocument();
	});

	test('actualizar el estado al escribir en el input ', () => {
		const { getByTestId } = render(<Saludo />);
		const inputForm = getByTestId('inputForm');

		fireEvent.change(inputForm, { target: { value: 'pepito' } });

		expect(inputForm.value).toBe('pepito');
	});

	test('Mostrar el saludo al enviar el formulario', () => {
		const { getByTestId } = render(<Saludo />);
		const inputForm = getByTestId('inputForm');
		const submitFormBtn = getByTestId('submitFormBtn');

		fireEvent.change(inputForm, { target: { value: 'pepito' } });
		fireEvent.click(submitFormBtn);

		const saludarUsuario = getByTestId('saludarUsuario');

		expect(saludarUsuario.textContent).toBe('Hola pepito');
	});
});
