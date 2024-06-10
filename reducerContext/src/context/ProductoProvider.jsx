import React, { useEffect, useReducer, useState } from 'react';
import { ProductoContext } from './ProductoContext';
import { productoReducer } from '../reducer/productosReducer';
import productoApi from '../api/productoApi';

export const ProductoProvider = ({ children }) => {
	const valorInicial = {
		products: [],
	};

	const [state, dispatch] = useReducer(productoReducer, valorInicial);

	useEffect(() => {
		const getLista = async () => {
			try {
				const respuesta = await productoApi.get('/productos');
				dispatch({ type: 'GetProductos', payload: respuesta.data });
			} catch (error) {
				console.log(error);
			}
		};

		getLista();
	}, []);

	const agregarProducto = async (producto) => {
		try {
			const respuesta = await productoApi.post('/crearProducto', producto);
			dispatch({ type: 'Agregar_Producto', payload: respuesta.data });
		} catch (error) {
			console.log(error);
		}
	};

	const eliminarProducto = (id) => {
		dispatch({ type: 'Eliminar_Producto', payload: id });
	};

	const actualizarProducto = (producto) => {
		dispatch({ type: 'Actualizar_Producto', payload: producto });
	};

	return (
		<ProductoContext.Provider
			value={{ agregarProducto, state, eliminarProducto, actualizarProducto }}
		>
			{children}
		</ProductoContext.Provider>
	);
};
