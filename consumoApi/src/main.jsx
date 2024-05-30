import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CounterHook } from './components/customHook/CounterHook.jsx';
import { FocusScreen } from './components/useRef/FocusScreen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		{/* <CounterHook /> */}
		{/* <FocusScreen /> */}
	</React.StrictMode>
);
