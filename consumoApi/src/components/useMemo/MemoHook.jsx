import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const iteracion = (iteracionNumero = 100) => {
	for (let i = 0; i < iteracionNumero; i++) {
		console.log('iterando');
	}

	// return `${iteracionNumero} iteraciones realizadas`;
};

export const MemoHook = () => {
	const { counter, incrementar } = useCounter(4000);
	const [show, setShow] = useState(true);

	const memorizar = useMemo(() => iteracion(counter), [counter]);

	return (
		<div className="d-flex flex-column align-items-center mt-3">
			<h1>{counter}</h1>

			{memorizar}

			<button className="btn btn-primary" onClick={() => incrementar()}>
				+1
			</button>

			<button
				className="btn btn-outline-primary mt-3"
				onClick={() => setShow(!show)}
			>
				{JSON.stringify(show)}
			</button>
		</div>
	);
};
