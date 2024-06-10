import React, { useContext, useState } from 'react';
import { ProductoContext } from '../context/ProductoContext';

export const AddProducto = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const { agregarProducto } = useContext(ProductoContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		//validaciones

		//pasar dato
		agregarProducto({ name, price });
		//una vez enviado al backend
		setName('');
		setPrice('');
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
				Agregar
			</button>
		</form>
	);
};
