import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductosScreen } from '../pages/ProductosScreen';
import { ProductoProvider } from '../context/ProductoProvider';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<ProductoProvider>
				<Routes>
					<Route path="/" element={<ProductosScreen />} />
				</Routes>
			</ProductoProvider>
		</BrowserRouter>
	);
};
