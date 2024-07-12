import React from 'react';
import useCounterStore from '../zustand/counter-zustand';

export const ContadorSecundario = () => {
	const id = 'secundario';
	const { count, incrementador, decrementador } = useCounterStore(id)();

	return (
		<>
			<h1>Aprendiendo Zustand</h1>

			<div>
				<h2>{count}</h2>

				<button onClick={incrementador}>Incrementar</button>
				<button onClick={decrementador}>Decrementar</button>
			</div>
		</>
	);
};
