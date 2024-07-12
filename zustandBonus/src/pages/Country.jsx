import React, { useEffect } from 'react';
import useCountryStore from '../zustand/country-zustand';

export const Country = () => {
	const paises = useCountryStore((state) => state.paises);
	const loading = useCountryStore((state) => state.loading);
	const error = useCountryStore((state) => state.error);
	const getPaises = useCountryStore((state) => state.getPaises);

	useEffect(() => {
		getPaises();
	}, [getPaises]);

	if (loading) {
		return <div>Cargando...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<h1>A</h1>
			{paises.length > 0 && (
				<ul>
					{paises.map((pais, index) => (
						<li key={index}>{pais.name.common}</li>
					))}
				</ul>
			)}
		</div>
	);
};
