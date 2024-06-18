import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, actions) => {
			state.value = state.value + actions.payload;
		},

		decrement: (state, actions) => {
			console.log(actions);
			state.value = state.value - actions.payload;
		},

		reset: (state) => {
			state.value = initialState.value;
		},
	},
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
