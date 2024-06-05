import { useReducer } from 'react';
import { tareaReducer } from '../tareaReducer';

export const useTareas = () => {
	const [tareas, dispatch] = useReducer(tareaReducer, []);

	const handleAgregar = (tarea) => {
		const action = {
			type: 'agregar Tarea',
			payload: tarea,
		};

		dispatch(action);
	};

	const handleEliminar = (id) => {
		const action = {
			type: 'borrar tarea',
			payload: id,
		};

		dispatch(action);
	};

	return {
		handleAgregar,
		tareas,
		handleEliminar,
	};
};
