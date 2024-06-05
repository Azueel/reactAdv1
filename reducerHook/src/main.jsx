import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { TareasApp } from './listaTareas/TareasApp.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<TareasApp />
	</React.StrictMode>
);
