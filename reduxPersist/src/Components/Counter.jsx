import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../slice/counterSlice';

export const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	const valor = localStorage.getItem('persist:root');
	console.log(valor);
	return (
		<div>
			<h1>Counter: {count}</h1>

			<button onClick={() => dispatch(increment())}>Incrementar</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
			<button onClick={() => dispatch(decrement())}>Decrementar</button>
		</div>
	);
};
