import React, { useState } from 'react';

export const Contador = () => {
	const [contador, setContador] = useState(0);

	const incrementar = () => setContador(contador + 1);
	const decrementar = () => setContador(contador - 1);

	return (
		<div>
			<h1 data-testid="count">Counter: {contador}</h1>

			<button data-testid="incrementar" onClick={incrementar}>
				Incrementar
			</button>
			<button data-testid="decrementar" onClick={decrementar}>
				Decrementar
			</button>
		</div>
	);
};

export default Contador;
