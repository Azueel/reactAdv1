import React from 'react';
import { useState } from 'react';

const Saludo = () => {
	const [saludo, setSaludo] = useState('');
	const [show, setShow] = useState(false);

	const handleSaludo = (e) => {
		e.preventDefault();
		setShow(true);
	};
	return (
		<div>
			<form action="" onSubmit={handleSaludo}>
				<input
					data-testid="inputForm"
					type="text"
					onChange={(e) => setSaludo(e.target.value)}
				/>
				<button data-testid="submitFormBtn" type="submit">
					Saludar
				</button>
			</form>

			{show && <h1 data-testid="saludarUsuario">Hola {saludo}</h1>}
		</div>
	);
};

export default Saludo;
