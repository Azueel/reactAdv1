// import useCounterStore from './zustand/counter-zustand';

import { AppRouter } from './router/AppRouter';

// function App() {
// 	const { count, incrementador, decrementador } = useCounterStore();

// 	return (
// 		<>
// 			<h1>Aprendiendo Zustand</h1>

// 			<div>
// 				<h2>{count}</h2>

// 				<button onClick={incrementador}>Incrementar</button>
// 				<button onClick={decrementador}>Decrementar</button>
// 			</div>
// 		</>
// 	);
// }

// export default App;

function App() {
	return <AppRouter />;
}

export default App;
