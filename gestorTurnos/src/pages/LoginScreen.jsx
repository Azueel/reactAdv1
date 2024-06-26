import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		//validaciones basicas
		if (userName === 'admin' && password === 'admin123') {
			dispatch(login({ userName: 'admin', rol: 'Admin' }));
			navigate('/admin');
			return;
		}
		dispatch(login({ userName: userName, rol: 'usuario' }));
		navigate('/');
	};

	return (
		<div className="mt-5 p-3">
			<h2>Login</h2>
			<form className="w-50" onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="">UserName</label>
					<input
						type="text"
						className="form-control"
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="">Password</label>
					<input
						type="password"
						className="form-control"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button type="submit" className="mt-3 btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};
