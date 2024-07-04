import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	users: [],
	status: 'ninguno',
	error: null,
};

//thunks asincronicos
export const getUsers = createAsyncThunk('users/getUsers', async () => {
	const resp = await axios.get('http://localhost:3001/users');
	return resp.data;
});

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state, action) => {
				state.status = 'Cargando';
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.status = 'Exitoso';
				state.users = action.payload;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.status = 'Denegado';
				state.error = action.error.message;
			});
	},
});

export default userSlice.reducer;
