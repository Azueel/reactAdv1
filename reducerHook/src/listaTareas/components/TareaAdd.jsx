import React, { useState } from 'react';

export const TareaAdd = ({ handleAgregar }) => {
	const [tarea, setTarea] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const nuevaTarea = {
			id: new Date().getTime(),
			descripcion: tarea,
		};

		handleAgregar(nuevaTarea);
	};

	return (
		<>
			<form className="me-4" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="¿Que Tarea hay que hacer?"
					className="form-control "
					onChange={(e) => setTarea(e.target.value)}
				/>

				<button type="submit" className="btn btn-outline-primary mt-2 ">
					Agregar
				</button>
			</form>
		</>
	);
};
