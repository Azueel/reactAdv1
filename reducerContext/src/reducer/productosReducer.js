export const productoReducer = (state, action) => {
	switch (action.type) {
		case 'Agregar_Producto':
			return {
				...state,
				products: [...state.products, action.payload],
			};

		case 'GetProductos':
			return {
				...state,
				products: action.payload,
			};

		case 'Eliminar_Producto':
			return {
				...state,
				products: state.products.filter(
					(producto) => producto._id !== action.payload
				),
			};

		case 'Actualizar_Producto':
			return {
				...state,
				products: state.products.map((producto) =>
					producto._id === action.payload._id ? action.payload : producto
				),
			};
	}
};
