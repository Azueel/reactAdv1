import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contador from '../../src/Components/Contador';

describe('Testeando Componente de Contador', () => {
	test('Renderizado del contador en el componente', () => {
		render(<Contador />);
		const elementoContador = screen.getByTestId('count');
		expect(elementoContador).toBeInTheDocument();
		expect(elementoContador).toHaveTextContent('0');
	});

	test('incrementar Contador', () => {
		render(<Contador />);
		const incrementarButton = screen.getByTestId('incrementar');
		fireEvent.click(incrementarButton);
		const elementoContador = screen.getByTestId('count');
		expect(elementoContador).toHaveTextContent('1');
	});

	test('decrementar Contador', () => {
		render(<Contador />);
		const decrementarButton = screen.getByTestId('decrementar');
		fireEvent.click(decrementarButton);
		const elementoContador = screen.getByTestId('count');
		expect(elementoContador).toHaveTextContent('-1');
	});
});
