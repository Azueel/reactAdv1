import { useEffect } from 'react';
import { getUsers } from './slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const userStatus = useSelector((state) => state.users.status);
	const user = useSelector((state) => state.users.users);
	const error = useSelector((state) => state.users.error);

	useEffect(() => {
		if (userStatus === 'ninguno') {
			dispatch(getUsers());
		}
	}, []);

	let content;

	if (userStatus === 'Cargando') {
		content = <p>Cargando...</p>;
	} else if (userStatus === 'Exitoso') {
		content = (
			<ul>
				{user.map((usuario) => (
					<li key={usuario.id}>{usuario.name}</li>
				))}
			</ul>
		);
	} else if (userStatus === 'Denegado') {
		content = <p>{error}</p>;
	}

	return (
		<>
			<h2>Usuarios</h2>
			{content}
		</>
	);
}

export default App;
