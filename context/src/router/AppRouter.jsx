import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login';
import { Home } from '../components/Home';
import { UserProvider } from '../context/UserProvider';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};
