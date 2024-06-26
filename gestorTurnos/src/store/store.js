import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import turnosSlice from '../slices/turnosSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		turnos: turnosSlice,
	},
});
