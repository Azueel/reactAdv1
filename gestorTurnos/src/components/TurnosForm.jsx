import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarTurno } from '../slices/turnosSlice';

export const TurnosForm = () => {
	const [nombre, setNombre] = useState('');
	const [dni, setDni] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const dispatch = useDispatch();

	const handleTurnos = (e) => {
		e.preventDefault();
		//validaciones basicas

		const nuevoTurno = {
			id: Math.floor(Math.random() * 1000),
			nombre,
			dni,
			descripcion,
			status: 'Pendiente',
		};

		dispatch(agregarTurno(nuevoTurno));

		setNombre('');
		setDni('');
		setDescripcion('');
	};
	return (
		<form className="p-3" onSubmit={handleTurnos}>
			<div className="form-group">
				<label htmlFor="">Nombre</label>
				<input
					type="text"
					className="form-control"
					onChange={(e) => setNombre(e.target.value)}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="">Dni</label>
				<input
					type="number"
					className="form-control"
					onChange={(e) => setDni(e.target.value)}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="">descripcion</label>
				<input
					type="text"
					className="form-control"
					onChange={(e) => setDescripcion(e.target.value)}
				/>
			</div>

			<button type="submit" className="btn btn-primary mt-3">
				Sacar Turno
			</button>
		</form>
	);
};
