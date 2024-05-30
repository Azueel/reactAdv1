import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterHook = () => {
	const { counter, incrementar, decrementar, reset } = useCounter(20);

	return (
		<div className="d-flex align-items-center flex-column mt-5">
			<h2>Contador: {counter}</h2>

			<div className="p-3">
				<button onClick={() => incrementar(2)} className="btn btn-primary  m-2">
					+1
				</button>
				<button onClick={() => reset()} className="btn btn-primary  m-2">
					Reset
				</button>
				<button onClick={() => decrementar(5)} className="btn btn-primary  m-2">
					-1
				</button>
			</div>
		</div>
	);
};
