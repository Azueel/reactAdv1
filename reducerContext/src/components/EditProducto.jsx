import React, { useContext, useState } from 'react';
import { ProductoContext } from '../context/ProductoContext';

export const EditProducto = ({ handleCancel, producto }) => {
	const [name, setName] = useState(producto.name);
	const [price, setPrice] = useState(producto.price);
	const { actualizarProducto } = useContext(ProductoContext);

	const handleSubmit = () => {
		actualizarProducto({ ...producto, name, price });
		handleCancel();
	};
	return (
		<form onSubmit={handleSubmit} className="p-2">
			<input
				type="text"
				placeholder="Nombre del Producto"
				className="form-control w-25"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<input
				type="number"
				placeholder="Precio del Producto"
				className="form-control w-25 mt-3"
				onChange={(e) => setPrice(e.target.value)}
				value={price}
			/>
			<button type="submit" className="btn btn-primary mt-3">
				Actualizar
			</button>
			<button
				type="submit"
				className="btn btn-primary mt-3 ms-2"
				onClick={handleCancel}
			>
				Cancelar
			</button>
		</form>
	);
};
