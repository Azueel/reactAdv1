import { createSlice } from '@reduxjs/toolkit';

const cargarTurnos = () => {
	const turnosAlmacenados = localStorage.getItem('turnos');
	return turnosAlmacenados ? JSON.parse(turnosAlmacenados) : [];
};

const guardarTurnos = (turnos) => {
	localStorage.setItem('turnos', JSON.stringify(turnos));
};

const turnosSlice = createSlice({
	name: 'turnos',
	initialState: cargarTurnos(),
	reducers: {
		agregarTurno: (state, action) => {
			state.push(action.payload);
			guardarTurnos(state);
		},

		actualizarEstadoTurno: (state, action) => {
			const { id, status } = action.payload;
			const turnos = state.find((turno) => turno.id === id);
			if (turnos) {
				turnos.status = status;
				guardarTurnos(state);
			}
		},
	},
});

export const { agregarTurno, actualizarEstadoTurno } = turnosSlice.actions;

export default turnosSlice.reducer;
