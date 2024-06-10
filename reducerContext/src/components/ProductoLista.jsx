import React, { useContext } from 'react';
import { ProductoContext } from '../context/ProductoContext';
import { Producto } from './Producto';

export const ProductoLista = () => {
	const { state } = useContext(ProductoContext);

	return (
		<div>
			<h2>Lista de Productos</h2>

			<ul className="list-group">
				{state.products &&
					state.products.map((producto) => (
						<Producto key={producto._id} producto={producto} />
					))}
			</ul>
		</div>
	);
};
