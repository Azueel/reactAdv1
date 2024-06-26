import React from 'react';
import { useSelector } from 'react-redux';

export const TurnosCard = () => {
	const listaTurnos = useSelector((state) => state.turnos);

	return (
		<>
			{
				<div>
					{listaTurnos.map((turno) => {
						return (
							<div className="card mb-3">
								<div className="card-body">
									<h5 className="card-title">Turno Para: {turno.nombre}</h5>
									<p className="card-text">DNI: {turno.dni}</p>
									<p className="card-text">Descripcion: {turno.descripcion}</p>
									<p className="card-text">Estado: {turno.status}</p>
								</div>
							</div>
						);
					})}
				</div>
			}
		</>
	);
};
