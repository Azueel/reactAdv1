import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContadorPrincipal } from '../pages/ContadorPrincipal';
import { ContadorSecundario } from '../pages/ContadorSecundario';
import { Country } from '../pages/Country';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ContadorPrincipal />} />
				<Route path="/secundario" element={<ContadorSecundario />} />
				<Route path="/country" element={<Country />} />
			</Routes>
		</BrowserRouter>
	);
};
