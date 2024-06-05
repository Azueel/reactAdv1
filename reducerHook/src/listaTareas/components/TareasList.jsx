import React from 'react';

export const TareasList = ({ tareas, handleEliminar }) => {
	return (
		<>
			<ul className="list-group">
				{tareas.map((tarea) => {
					return (
						<li className="list-group-item d-flex justify-content-between">
							<span className="align-self-center">{tarea.descripcion}</span>

							<button
								onClick={() => handleEliminar(tarea.id)}
								className="btn btn-danger"
							>
								Borrar
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};
