import axios from 'axios';
import { create } from 'zustand';

const useCountryStore = create((set) => ({
	paises: [],
	loading: false,
	error: null,

	getPaises: async () => {
		set({ loading: true, error: null });
		try {
			const resp = await axios.get('https://restcountries.com/v3.1/all');
			set({ paises: resp.data, loading: false });
		} catch (error) {
			set({ error: error.message, loading: false });
		}
	},
}));

export default useCountryStore;
