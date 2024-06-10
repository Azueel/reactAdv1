import axios from 'axios';

const productoApi = axios.create({
	baseURL: 'http://localhost:4000/admin',
});

export default productoApi;
