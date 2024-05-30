import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Counter } from './Counter';

export const Memorize = () => {
	const { counter, incrementar } = useCounter();
	const [show, setShow] = useState(true);

	return (
		<>
			<div className="d-flex flex-column align-items-center mt-3">
				<h1>
					<Counter count={counter} />
				</h1>

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
		</>
	);
};
