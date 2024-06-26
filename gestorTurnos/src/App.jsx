import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';

function App() {
	return (
		<>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</>
	);
}

export default App;
