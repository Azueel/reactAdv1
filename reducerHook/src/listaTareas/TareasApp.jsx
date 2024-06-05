import React from 'react';
import { TareaAdd } from './components/TareaAdd';
import { useTareas } from './hooks/useTareas';
import { TareasList } from './components/TareasList';

export const TareasApp = () => {
	const { handleAgregar, tareas, handleEliminar } = useTareas();

	return (
		<>
			<h1>TareasRolling</h1>

			<div className="row">
				<div className="col-7">
					<h2>Lista de tareas</h2>
					<TareasList tareas={tareas} handleEliminar={handleEliminar} />
				</div>

				<div className="col-5">
					<h4>Agregar Tarea</h4>
					<TareaAdd handleAgregar={handleAgregar} />
				</div>
			</div>
		</>
	);
};
