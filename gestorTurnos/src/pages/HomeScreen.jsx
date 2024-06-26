import React from 'react';
import { TurnosForm } from '../components/TurnosForm';
import { TurnosCard } from '../components/TurnosCard';

export const HomeScreen = () => {
	return (
		<div>
			<h1>Sistema de Gestion de Turnos</h1>

			<TurnosForm />

			<TurnosCard />
		</div>
	);
};
