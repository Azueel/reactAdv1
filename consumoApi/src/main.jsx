import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CounterHook } from './components/customHook/CounterHook.jsx';
import { FocusScreen } from './components/useRef/FocusScreen.jsx';
import { Memorize } from './components/useMemo/Memorize.jsx';
import { MemoHook } from './components/useMemo/MemoHook.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		{/* <App /> */}
		{/* <CounterHook /> */}
		{/* <FocusScreen /> */}
		{/* <Memorize /> */}
		<MemoHook />
	</>
);
