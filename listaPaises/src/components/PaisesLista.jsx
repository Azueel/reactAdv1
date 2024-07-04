import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPaises } from '../slices/paisesSlice';

export const PaisesLista = () => {
	const paises = useSelector((state) => state.paises.paises);
	const status = useSelector((state) => state.paises.status);
	const error = useSelector((state) => state.paises.error);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPaises());
	}, []);

	let content;

	if (status === 'Cargando') {
		content = <p>Cargando...</p>;
	} else if (status === 'Exitoso') {
		content = (
			<ul>
				{paises.map((pais) => (
					<li key={pais.cca2}>{pais.name.common}</li>
				))}
			</ul>
		);
	} else if (status === 'Rechazado') {
		content = <p>{error}</p>;
	}

	return <div>{content}</div>;
};
