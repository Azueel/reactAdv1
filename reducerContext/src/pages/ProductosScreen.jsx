import React from 'react';
import { AddProducto } from '../components/AddProducto';
import { ProductoLista } from '../components/ProductoLista';

export const ProductosScreen = () => {
	return (
		<>
			<h1 className="mb-3">Gestion de Productos</h1>

			<AddProducto />
			<hr />
			<ProductoLista />
		</>
	);
};
