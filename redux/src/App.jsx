import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './slices/counterSlice';

function App() {
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Redux</h1>

			<h1>{counter}</h1>

			<button onClick={() => dispatch(increment())}>+1</button>
			<button onClick={() => dispatch(reset())}>Reset</button>

			<button onClick={() => dispatch(reset())}>-1</button>
		</>
	);
}

export default App;
