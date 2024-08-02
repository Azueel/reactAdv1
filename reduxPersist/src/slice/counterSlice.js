import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
	loading: false,
	error: null,
};
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},

		reset: (state) => {
			state.value = 0;
		},
	},
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
