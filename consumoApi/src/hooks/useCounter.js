import { useState } from 'react';

export const useCounter = (value = 20) => {
	const [counter, setCounter] = useState(value);

	const incrementar = (num = 1) => {
		setCounter(counter + num);
	};

	const decrementar = (num = 1) => {
		if (counter === 0) return;
		setCounter(counter - num);
	};

	const reset = () => {
		setCounter(value);
	};

	return {
		counter,
		incrementar,
		decrementar,
		reset,
	};
};
