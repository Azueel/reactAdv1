export const tareaReducer = (state, action) => {
	switch (action.type) {
		case 'agregar Tarea':
			return [...state, action.payload];

		case 'borrar tarea':
			return state.filter((tarea) => tarea.id !== action.payload);
	}
};
