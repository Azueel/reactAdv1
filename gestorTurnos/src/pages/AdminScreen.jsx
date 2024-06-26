import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarEstadoTurno } from '../slices/turnosSlice';

export const AdminScreen = () => {
	const listaTurnos = useSelector((state) => state.turnos);
	const dispatch = useDispatch();

	const handleStatus = (id, status) => {
		dispatch(actualizarEstadoTurno({ id, status }));
	};
	return (
		<>
			<div className="mt-4">
				<h2>Panel de Administracion</h2>

				<table className="table">
					<thead>
						<th>Nombre</th>
						<th>Dni</th>
						<th>Descripcion</th>
						<th>Estado</th>
						<th>Acciones</th>
					</thead>

					<tbody>
						{listaTurnos.map((turno) => {
							return (
								<tr key={turno.id}>
									<td>{turno.nombre}</td>
									<td>{turno.dni}</td>
									<td>{turno.descripcion}</td>
									<td>{turno.status}</td>

									<td>
										<button
											className="btn btn-success"
											onClick={() => handleStatus(turno.id, 'Confirmado')}
										>
											Confirmar
										</button>
										<button
											className="btn btn-danger ms-3"
											onClick={() => handleStatus(turno.id, 'Rechazado')}
										>
											Rechazar
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};
