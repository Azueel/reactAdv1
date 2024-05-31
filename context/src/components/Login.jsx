import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const Login = () => {
	const [nombre, setNombre] = useState('');
	const navigate = useNavigate();
	const { nameUser } = useContext(UserContext);

	const loginUsuario = (e) => {
		e.preventDefault();
		if (!nombre) return;
		nameUser(nombre);
		navigate('/home');
	};

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={loginUsuario}>
				<input type="text" onChange={(e) => setNombre(e.target.value)} />
				<button type="submit">Loguear</button>
			</form>
		</>
	);
};
