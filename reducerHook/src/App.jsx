import { useReducer, useState } from 'react';

const valorInicial = { count: 0 };

const reducerCounter = (state, action) => {
	switch (action.type) {
		case 'incrementar':
			return { count: state.count + 1 };
		case 'decrementar':
			return { count: state.count - 1 };

		default:
			new Error('accion no soportada');
	}
};

function App() {
	const [counter, dispatch] = useReducer(reducerCounter, valorInicial);

	return (
		<>
			<h1>Reducer</h1>

			<h2>{counter.count}</h2>

			<button onClick={() => dispatch({ type: 'incrementar' })}>+1</button>
			<button onClick={() => dispatch({ type: 'decrementar' })}>-1</button>
		</>
	);
}

export default App;
