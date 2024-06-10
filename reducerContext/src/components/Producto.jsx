import React, { useContext, useState } from 'react';
import { ProductoContext } from '../context/ProductoContext';
import { EditProducto } from './EditProducto';

export const Producto = ({ producto }) => {
	const { eliminarProducto } = useContext(ProductoContext);
	const [editarShow, setEditarShow] = useState(false);

	const handleEdit = () => {
		setEditarShow(true);
	};

	const handleCancel = () => {
		setEditarShow(false);
	};

	return (
		<li className="list-group-item d-flex flex-column">
			{editarShow ? (
				<EditProducto handleCancel={handleCancel} producto={producto} />
			) : (
				<div>
					<p>
						Producto: <strong>{producto.name}</strong>
					</p>

					<p>
						precio: <strong>{producto.price}</strong>
					</p>

					<div className="d-flex">
						<>
							<button className="btn btn-outline-primary" onClick={handleEdit}>
								Editar
							</button>
							<button
								className="btn btn-outline-danger ms-2"
								onClick={() => eliminarProducto(producto._id)}
							>
								Eliminar
							</button>
						</>
					</div>
				</div>
			)}
		</li>
	);
};
