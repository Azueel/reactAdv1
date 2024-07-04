import { configureStore } from '@reduxjs/toolkit';
import paisesSlice from '../slices/paisesSlice';

export const store = configureStore({
	reducer: {
		paises: paisesSlice,
	},
});
